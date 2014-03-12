/* Scores
 * --------------------------------------------------------------- */

var Scores = function(board) {
    
    var N = board.N;

    var MAGIC_SUM = board.MAGIC_SUM;

    var state = _.map(_.range(2 * N + 2), function(i) {
        return {
            v: 0,
            n: 0
        };
    });

    return {
        
        update: function(num, side) {
            var pt = board.get(num).pt,
                val = num[1] * side,
                count = 1 * side;

            state[pt.x].v += val;
            state[pt.x].n += count;
            state[pt.y + N].v += val;
            state[pt.y + N].n += count;
            
            // (0,0) => (1,1) => (2,2)
            if (pt.x === pt.y) {
                state[2 * N].v += val;
                state[2 * N].n += count;
            }

            // (0,2) => (1,1) => (2,0)
            if (pt.x + pt.y === N - 1) {
                state[2 * N + 1].v += val;
                state[2 * N + 1].n += count;
            }
        },

        each: function(fn) {
            for (var i = 0, len = state.length; i < len; i++) {
                fn(state[i].v, i);
            }
        },

        get_winning_move: function() {
            for (var i = 0, len = state.length; i < len; i++) {
                if (state[i].n === -1 * (N - 1)) { 
                    return '_' + (MAGIC_SUM + state[i].v);
                }
            }
        },

        get_blocking_move: function() {
            for (var i = 0, len = state.length; i < len; i++) {
                if (state[i].n === N - 1) {
                    return '_' + (MAGIC_SUM - state[i].v);
                }
            }
        },
                
        is_over: function() {
            for (var i = 0; i < state.length; i++) {
                if (Math.abs(state[i].v) === MAGIC_SUM) {
                    return true;
                }
            }
            return false;
        }

    };

}; 
