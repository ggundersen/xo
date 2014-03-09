/* AIBehaviorScan
 * --------------------------------------------------------------- */

var AIBehaviorScan = {

    getMove: function(game) {
        var suggestedMoves = [];
        suggestedMoves.push( this.win(game.board, game.score, this.MOVE_VALUE.WIN) );
        suggestedMoves.push( this.blockWin(game.board, game.score, this.MOVE_VALUE.BLOCK_WIN) );
        suggestedMoves.push( this.getRandomMove(game.board, this.MOVE_VALUE.RANDOM) );
        return this.analyzeMove(suggestedMoves).pt;
    },

    analyzeMove: function(moves) {
        var i = 0,
            finalMove = new Move(undefined, -1),
            move;
        for (; i < moves.length; i++) {
            move = moves[i];
            if (move && move.pt && move.val > finalMove.val) {
                finalMove = move;
            }
        };
        return finalMove;
    },

    // TODO: `win` and `blockWin` seem fundamentally related. Can you
    // simplify them by abstraction?
    win: function(board, score, moveVal) {
        var i = 0,
            sc,
            suggestedMove;

        for (; i < score.length; i++) {
            sc = score[i];
            if (sc === (board.N - 1) * this.val) {
                if (i < board.N) {
                    suggestedMove = new Move(this.searchXorY(board, i, undefined), moveVal);
                } else if (i < 2 * board.N) {
                    suggestedMove = new Move(this.searchXorY(board, undefined, i-3), moveVal);
                } else {
                    suggestedMove = new Move(this.searchDiagonal(board, i), moveVal);
                }
            }
        };

        return suggestedMove;
    },

    blockWin: function(board, score, moveVal) {
        var i = 0,
            src,
            suggestedMove;

        for (; i < score.length; i++) {
            sc = score[i];
            if (sc === (board.N - 1)) {
                if (i < board.N) {
                    suggestedMove = new Move(this.searchXorY(board, i, undefined), moveVal);
                } else if (i < 2 * board.N) {
                    suggestedMove = new Move(this.searchXorY(board, undefined, i-3), moveVal);
                } else {
                    suggestedMove = new Move(this.searchDiagonal(board, i), moveVal);
                }
            }
        };

        return suggestedMove;
    },
    
    searchXorY: function(board, x, y) {
        var pt;

        for (var i = 0; i < board.N; i++) {
            pt = x !== undefined ? new Point(x, i) : new Point(i, y);
            if (board.get(pt) === 0) {
                return pt;
            }
        }
    },
    
    searchDiagonal: function(board, i) {
        var pt;

        if (i === 2 * board.N) {
            for (var i = 0; i < board.N; i++) {
                pt = new Point(i, i);
                if (board.get(pt) === 0) {
                    return pt;
                }
            }
        } else {
            for (var i = 0; i < board.N; i++) {
                pt = new Point(i, this.flip(board.N - 1, i));
                if (board.get(pt) === 0) {
                    return pt;
                }
            }
        }
    },

    // `flip` is a helper function:
    // 0 => 2-0 => 2
    // 1 => 2-1 => 1
    // 2 => 2-2 => 0
    flip: function(m, n) {
        return m - n;
    }

};


