/* Scores
 * --------------------------------------------------------------- */

var Scores = function(N) {
    
    var state = window.exposedState = _.map(_.range(2 * N + 2), function() {
        return 0;
    });

    return {
        
        update: function(pt, piece) {
            state[pt.x] += piece;
            state[pt.y + N] += piece;
            
            // (0,0) => (1,1) => (2,2)
            if (pt.x === pt.y) {
                state[2 * N] += piece;
            }

            // (0,2) => (1,1) => (2,0)
            if (pt.x + pt.y === N - 1) {
                state[2 * N + 1] += piece;
            }
        },

        each: function(fn) {
            for (var i = 0; i < state.length; i++) {
                fn(state[i], i);
            }
        },

        isWin: function() {
            for (var i = 0; i < state.length; i++) {
                if (Math.abs(state[i]) === N) {
                    return true;
                }
            }
            return false;
        }

    };

}; 
