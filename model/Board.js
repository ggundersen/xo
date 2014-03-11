/* Board
 *
 * index <=> (x, y) conversions for board size N
 * i = x + y * N
 * x = i % N
 * y = Math.floor(i / N)
 * --------------------------------------------------------------- */

var Board = function(N) {

    var state = _.map(_.range(N * N), function(i) {
        return 0;
    });

    return {

        N: N,
        
        set: function(pt, piece) {
            state[pt.x + pt.y * N] = piece;
        },
            
        get: function(pt) {
            return state[pt.x + pt.y * N];
        },

        each: function(fn) {
            for (var i = 0, len = state.length; i < len; i++) {
                fn(state[i], new Point(i % N, Math.floor(i / N)));
            }
        },

        eachRow: function(fn) {
            for (var i = 0; i < N; i++) {
                fn(i);
            }
        },

        // These two access routines allows us to redefine "empty" to
        // be anything.
        isFull: function() {
            for (var i = 0, len = state.length; i < len; i++) {
                if (state[i] === 0) {
                    return false;
                }
            }
            return true;
        },

        isEmpty: function(pt) {
            if (this.get(pt) === 0) {
                return true;
            }
            return false;
        }

    };
};
