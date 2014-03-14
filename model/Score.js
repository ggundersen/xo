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

            //console.log(arr);

            return arr;
        },

        // index <=> (x, y) conversions for board size N
        // i = x + y * N
        // x = i % N
        // y = Math.floor(i / N)
        update: function(num, side) {
            this.internal_update(num, side, state);
        },

        // We do not need `side` because only the AI will call this.
        // We create a deep clone so as to not modify the state of
        // the game.
        test: function(num, side) {
            var dest, prop, src,
                clone = [],
                i = 0,
                len = state.length;

            for (; i < len; i++) {
                dest = {};
                dest.v = state[i].v;
                dest.n = state[i].n;
                clone.push(dest);
            }
            
            return this.internal_update(num, side, clone);
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
