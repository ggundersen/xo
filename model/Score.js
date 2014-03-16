/* Score
 *
 * The Score metaobject works against the `state` stateay. Each object
 * in the stateay represents a row as follows:
 *
 * x1, x2, x3, y1, y2, y3, diag1, diag2
 *
 * The `count` property indicates the *adjusted* number of pieces of
 * a side in that row. For example, if there were two X pieces and
 * one O piece in a row, that row's score object's `count` would be
 * 2 - 1 = 1. Thus, if any row's `count` is the absolute value of the
 * board's size, N, that row wins.
 *
 * The `magic` property allows us to calculate *which* square in the
 * row is would be the winning square without having to do a bunch of
 * iteration and addition. Consider this top row in a magic square:
 *
 * 4  9  2
 *
 * If the first two squares have the AI's pieces on them, then the AI
 * knows that 15 - 4 - 9 = 2 will win. Tic-tac-toe's complexity is
 * trivial and a brute-force algorithm works fine but is less
 * elegant, e.g. http://stackoverflow.com/a/1056352/1830334.
 * --------------------------------------------------------------- */

var Score = function(board) {
    
    // These assignments are only for readablility.
    var N = board.N;
    var M = board.M;

    var state = [
        { count: 0, magic: 0 },
        { count: 0, magic: 0 },
        { count: 0, magic: 0 },
        { count: 0, magic: 0 },
        { count: 0, magic: 0 },
        { count: 0, magic: 0 },
        { count: 0, magic: 0 },
        { count: 0, magic: 0 }
    ];
    
    // index <=> (x, y) conversions for board size N
    // i = x + y * N
    // x = i % N
    // y = Math.floor(i / N)
    var update = function(idx, side) {
        var magic = board.get(idx).magic * side,
            count = side,
            x = idx % N,
            y = Math.floor(idx / N);

        state[x].count += count;
        state[x].magic += magic;
        state[y + N].count += count;
        state[y + N].magic += magic;
        
        // (0,0) => (1,1) => (2,2)
        if (x === y) {
            state[2 * N].count += count;
            state[2 * N].magic += magic;
        }
        // (0,2) => (1,1) => (2,0)
        if (x + y === N - 1) {
            state[2 * N + 1].count += count;
            state[2 * N + 1].magic += magic;
        }
    };
 
    board.each(function(squareObj, idx) {
        if (squareObj.piece === XO.CROSSES) {
            if (XO.human.team === XO.CROSSES) {
                update(idx, XO.human.VAL);
            } else {
                update(idx, XO.ai.VAL);
            }
        } else if (squareObj.piece === XO.NOUGHTS) {
            if (XO.human.team === XO.NOUGHTS) {
                update(idx, XO.human.VAL);
            } else {
                update(idx, XO.ai.VAL);
            }
        }
    });

     
    return {

        M: board.M,

        update: update,

        each: function(fn) {
            for (var i = 0, len = state.length; i < len; i++) {
                fn(state[i], [i]);
            }
        },

        is_over: function() {
            for (var i = 0; i < state.length; i++) {
                if (Math.abs(state[i].magic) === M) {
                    return true;
                }
            }
            return false;
        },

        is_win: function(obj, side) {
            if (obj.count === side * (board.N - 1)) {
                return true;
            }
            return false;
        }
    };
}; 
