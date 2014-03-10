/* Score
 * --------------------------------------------------------------- */

var Scores = function(N) {
    
    var state = _.map(_.range(2 * N + 2), function() {
        return 0;
    });

    return {
        
        update: function(index, piece) {
            var x = index % N,
                y = Math.floor(index / N);
        
            state[x] += piece;
            state[y] += piece;

            if (x === y) {
                state[2 * N] += piece;
            }
            if (x + y === N - 1) {
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
