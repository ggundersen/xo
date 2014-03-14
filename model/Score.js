/* Score
 *
 * The Score metaobject works against the `state` array. Each object
 * in the array represents a row as follows:
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
    
    return {

        M: board.M,

        each: function(fn) {
            for (var i = 0, len = state.length; i < len; i++) {
                fn(state[i], [i]);
            }
        },

        update: function(idx, side) {
            this.internal_update(idx, side, state);
        },

        // We create a deep clone so as to not modify the actual 
        // state of the game.
        test_update: function(idx, side) {
            var dest, prop, src,
                clone = [],
                i = 0,
                len = state.length;

            for (; i < len; i++) {
                dest = {};
                dest.magic = state[i].magic;
                dest.count = state[i].count;
                clone.push(dest);
            }
            
            return this.internal_update(idx, side, clone);
        },

        // This will update whichever state object you give it.
        // index <=> (x, y) conversions for board size N
        // i = x + y * N
        // x = i % N
        // y = Math.floor(i / N)
        internal_update: function(idx, side, arr) {
            var magic = board.get(idx).magic * side,
                count = 1 * side,
                x = idx % N,
                y = Math.floor(idx / N);

            arr[x].count += count;
            arr[x].magic += magic;
            arr[y + N].count += count;
            arr[y + N].magic += magic;
            
            // (0,0) => (1,1) => (2,2)
            if (x === y) {
                arr[2 * N].count += count;
                arr[2 * N].magic += magic;
            }
            // (0,2) => (1,1) => (2,0)
            if (x + y === N - 1) {
                arr[2 * N + 1].count += count;
                arr[2 * N + 1].magic += magic;
            }

            return arr;
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
