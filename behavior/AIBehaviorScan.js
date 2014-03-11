/* AIBehaviorScan
 * --------------------------------------------------------------- */

var AIBehaviorScan = {

    getMove: function(game) {
        var suggestedMoves = [];
        suggestedMoves.push( this.win(game.board, game.scores, this.MOVE_VALUE.WIN) );
        suggestedMoves.push( this.blockWin(game.board, game.scores, this.MOVE_VALUE.BLOCK_WIN) );
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
        /*var i = 0,
            sc,
            N = board.N,
            suggestedMove;

        for (; i < score.length; i++) {
            sc = score[i];
            if (sc === (N - 1) * this.val) {
                if (i < N) {
                    suggestedMove = new Move(this.searchX(board, i), moveVal);
                } else if (i < 2 * N) {
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
        var self = this,
            suggestedMove;

        scores.each(function(score, index) {
            if (score === (board.N - 1)) {
                if (index < board.N) {
                    suggestedMove = new Move(self.searchXY(board, index, undefined), moveVal);
                } else if (index < 2 * board.N) {
                    suggestedMove = new Move(self.searchXY(board, undefined, index-3), moveVal);
                } else {
                    suggestedMove = new Move(self.searchDiagonal(board, index), moveVal);
                }
            }
        });

        return suggestedMove;
    },
    
    searchXY: function(board, xIndex, yIndex) {
        var pt,
            tempPt;
        board.eachRow(function(i) {
            //tempPt = new Point(xIndex, yIndex);
            tempPt = yIndex === undefined ? new Point(xIndex, i) : new Point(i, yIndex);
            if (board.isEmpty(tempPt)) {
                pt = tempPt;
            }
        });
        return pt;
    },

    searchDiagonal: function(board, i) {
        var self = this,
            pt,
            tempPt;
        
        if (i === 2 * board.N) {
            board.eachRow(function(i) {
                tempPt = new Point(i, i); 
                if (board.isEmpty(tempPt)) {
                    pt = tempPt;
                }
            });
        } else {
            board.eachRow(function(i) {
                tempPt = new Point(i, self.flip(board.N - 1, i));
                if (board.isEmpty(tempPt)) {
                    pt = tempPt;
                };
            });
        }
        return pt;
    },

    // m = 2
    // n = 0 => 2
    // n = 1 => 1
    // n = 2 => 0
    flip: function(m, n) {
        return m - n;
    }

};


