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
