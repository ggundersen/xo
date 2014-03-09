/* AIBehaviorScan
 * --------------------------------------------------------------- */

var AIBehaviorScan = {

    win: function(board, score, moveVal) {
        var self = this,
            i = 0,
            sc,
            suggestedMove;
        for (; i < score.length; i++) {
            sc = score[i];
            if (sc === (board.N - 1) * this.val) {
                if (i < board.N) {
                    suggestedMove = new Move(self.searchXorY(board, i, undefined), moveVal);
                } else if (i < 2 * board.N) {
                    suggestedMove = new Move(self.searchXorY(board, undefined, i-3), moveVal);
                } else {
                    suggestedMove = new Move(self.searchDiagonal(board, i), moveVal);
                }
            }
        };
        return suggestedMove;
    },

    blockWin: function(board, score, moveVal) {
        var self = this,
            i = 0,
            src,
            suggestedMove;
        for (; i < score.length; i++) {
            sc = score[i];
            if (sc === (board.N - 1)) {
                if (i < board.N) {
                    suggestedMove = new Move(self.searchXorY(board, i, undefined), moveVal);
                } else if (i < 2 * board.N) {
                    suggestedMove = new Move(self.searchXorY(board, undefined, i-3), moveVal);
                } else {
                    suggestedMove = new Move(self.searchDiagonal(board, i), moveVal);
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


