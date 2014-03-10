/* Board
 *
 * index <=> (x, y) conversions for board size N
 * i = x + y * N
 * x = i % N
 * y = Math.floor(i / N)
 * --------------------------------------------------------------- */

var Board = function(N) {

    var state = _.map(_.range(N * N), function() {
        return 0;
    });

    return {

        N: N,
        
        set: function(index, piece) {
            state[index] = piece;
            //state[pt.x + (pt.y * this.N)] = piece;
        },
            
        get: function(index) {
            return state[index];
            //return state[pt.x + (pt.y * this.N)];
        },

        each: function(fn) {
            for (var i = 0; i < state.length; i++) {
                fn(state[i], i);
            }
        },

        // These two access routines allows us to redefine "empty" to
        // be anything.
        isFull: function() {
            for (var i = 0; i < state.length; i++) {
                if (state[i] === 0) {
                    return false;
                }
            }
            return true;
        },

        isEmpty: function(index) {
            if (state[index] === 0) {
                return true;
            }
            return false;
            //if (state[pt.x + (pt.y * this.N)] === 0) {
            //    return true;
            //}
            //return false;
        }

    };
};
