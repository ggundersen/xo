/* Magic
 * --------------------------------------------------------------- */

var Magic = function(board) {
    
    var N = board.N;

    var state = _.map(_.range(2 * N + 2), function(i) {
        return {
            v: 0,
            n: 0
        };
    });

    return {

        SUM: board.SUM,

        // This will update whichever state object you give it.
        internal_update: function(num, side, arr) {
            var pt = board.get(num).pt,
                val = num[1] * side,
                count = 1 * side;

            arr[pt.x].v += val;
            arr[pt.x].n += count;
            arr[pt.y + N].v += val;
            arr[pt.y + N].n += count;
            
            // (0,0) => (1,1) => (2,2)
            if (pt.x === pt.y) {
                arr[2 * N].v += val;
                arr[2 * N].n += count;
            }

            // (0,2) => (1,1) => (2,0)
            if (pt.x + pt.y === N - 1) {
                arr[2 * N + 1].v += val;
                arr[2 * N + 1].n += count;
            }
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
        test: function(num) {
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
            
            return this.internal_update(num, -1, clone);
        },

        each: function(fn) {
            for (var i = 0, len = state.length; i < len; i++) {
                fn(state[i], [i]);
            }
        },
        
        is_over: function() {
            for (var i = 0; i < state.length; i++) {
                if (Math.abs(state[i].v) === this.SUM) {
                    return true;
                }
            }
            return false;
        }

    };

}; 
