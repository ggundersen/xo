/* AIBehaviorScan
 * --------------------------------------------------------------- */

var AIBehaviorScan = {

    getMove: function(game) {
        var suggestedMoves = [];
        suggestedMoves.push( this.win(game.board, game.scores, this.MOVE_VALUE.WIN) );
        suggestedMoves.push( this.blockWin(game.board, game.scores, this.MOVE_VALUE.BLOCK_WIN) );
        suggestedMoves.push( this.getRandomMove(game.board, this.MOVE_VALUE.RANDOM) );
        return this.analyzeMove(suggestedMoves).index;
    },

    analyzeMove: function(moves) {
        var i = 0,
            finalMove = new Move(undefined, -1),
            move;
        for (; i < moves.length; i++) {
            move = moves[i];
            if (move && move.index && move.val > finalMove.val) {
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

        /*for (; i < score.length; i++) {
            sc = score[i];
            if (sc === (board.N - 1) * this.val) {
                if (i < board.N) {
                    suggestedMove = new Move(this.searchX(board, i), moveVal);
                } else if (i < 2 * board.N) {
                    suggestedMove = new Move(this.searchY(board, i-3), moveVal);
                } else {
                    suggestedMove = new Move(this.searchDiagonal(board, i), moveVal);
                }
            }
        };

        return suggestedMove;*/
    },

    // TODO: Rename score to scores everywhere. This is just me updating the param name.
    blockWin: function(board, scores, moveVal) {
        var i = 0,
            src,
            suggestedMove;

        scores.each(function(score) {
            console.log('iterating over score');
        });
        /*for (; i < score.length; i++) {
            sc = score[i];
            if (sc === (board.N - 1)) {
                if (i < board.N) {
                    suggestedMove = new Move(this.searchX(board, i), moveVal);
                } else if (i < 2 * board.N) {
                    suggestedMove = new Move(this.searchY(board, i-3), moveVal);
                } else {
                    suggestedMove = new Move(this.searchDiagonal(board, i), moveVal);
                }
            }
        };

        return suggestedMove;*/
    },
    
    /*searchXorY: function(board, x, y) {
        var pt;

        for (var i = 0; i < board.N; i++) {
            pt = x !== undefined ? new Point(x, i) : new Point(i, y);
            if (board.get(pt) === 0) {
                return pt;
            }
        }
    },*/

    searchY: function(board, y) {
        var index;
        for (var i = 0; i < board.N; i++) {
            index = y + i % board.N;
            if (board.isEmpty(index)) {
                return index;
            }
        }
    },

    searchX: function(board, x) {
        var index;
        for (var i = 0; i < board.N; i++) {
            index = x + Math.floor(i / board.N); 
            if (board.isEmpty(index)) {
                return index;
            }
        }
    },

    searchDiagonal: function(board, i) {
        var pt;

        if (i === 2 * board.N) {
            for (var i = 0; i < board.N; i++) {
                if (board.isEmpty(i)) {
                    return i;
                }
            }
        } else {
            for (var i = 0; i < board.N; i++) {
                //pt = new Point(i, this.flip(board.N - 1, i));
                
                if (board.isEmpty(i)) {
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


