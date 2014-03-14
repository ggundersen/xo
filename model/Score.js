/* Score
 * --------------------------------------------------------------- */

var Score = function(board) {
    
    var N = board.N;

    var state = _.map(_.range(2 * N + 2), function(i) {
        return {
            count: 0,
            magic: 0
        };
    });
    
    return {

        MAGIC_SUM: board.MAGIC_SUM,

        is_win: function(obj, side) {
            if (obj.count === side * (board.N - 1)) {
                return true;
            }
            return false;
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

        update: function(idx, side) {
            this.internal_update(idx, side, state);
        },

        // We create a deep clone so as to not modify the actual 
        // state of the game.
        test_move: function(idx, side) {
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

        each: function(fn) {
            for (var i = 0, len = state.length; i < len; i++) {
                fn(state[i], [i]);
            }
        },
        
        is_over: function() {
            for (var i = 0; i < state.length; i++) {
                if (Math.abs(state[i].magic) === board.MAGIC_SUM) {
                    return true;
                }
            }
            return false;
        }

    };

}; 
