/* AIAbstract
 *
 * http://programmers.stackexchange.com/a/228680/115607
 *
 * The critical observation made by Mario is that an FP approach to
 * this problem is to have the AI consume a board board--not
 * necessarily even the current one--and return a suggested move.
 *
 * Consider an alternative, where the AI manipulates (i.e. makes the
 * move) the board's board itself. Then you would have mutation at
 * multiple points in the program.
 * --------------------------------------------------------------- */

var AIAbstract = function(val) {
    this.val = val;
};

AIAbstract.prototype.MOVE_VALUE = {
    'WIN': 9,
    'BLOCK_WIN': 8,
    'BLOCK_FORK': 7,
    'RANDOM': 0,
    'NA': -1
};

// `getMove` and `analyzeMove` are virtual methods. What ultimately
// defines an AI "subclass" are these two methods.
AIAbstract.prototype.getMove = function() {};
AIAbstract.prototype.analyzeMove = function() {};

AIAbstract.prototype.win = function(board, score, moveVal) {
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
};

AIAbstract.prototype.block = function(board, score, moveVal) {
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
};

AIAbstract.prototype.random = function(board, moveVal) {
    var randomIndex,
        count = 0;
    while (board.state[randomIndex] !== 0) {
        count++;
        randomIndex = Math.floor(Math.random() * board.N * board.N);
    }
    return new Move(board.pt(randomIndex), moveVal);
};

AIAbstract.prototype.searchXorY = function(board, x, y) {
    var pt;
    for (var i = 0; i < board.N; i++) {
        pt = x !== undefined ? new Point(x, i) : new Point(i, y);
        if (board.get(pt) === 0) {
            return pt;
        }
    }
};

AIAbstract.prototype.searchDiagonal = function(board, i) {
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
};

// `flip` is a helper function:
// 0 => 2-0 => 2
// 1 => 2-1 => 1
// 2 => 2-2 => 0
AIAbstract.prototype.flip = function(m, n) {
    return m - n;
};
