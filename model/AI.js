/* AI
 *
 * http://programmers.stackexchange.com/a/228680/115607
 *
 * The critical observation made by Mario is that an FP approach to
 * this problem is to have the AI consume a board state--not
 * necessarily even the current one--and return a suggested move.
 *
 * Consider an alternative, where the AI manipulates (i.e. makes the
 * move) the board's state itself. Then you would have mutation at
 * multiple points in the program.
 * --------------------------------------------------------------- */

var AI = function(team) {
    this.team = team;
};

AI.prototype.analyzeState = function(state) {};

AI.prototype.searchXorY = function(state, x, y) {
    var pt;
    // TODO: Can I make this functional?
    for (var i = 0; i < state.N; i++) {
        pt = x !== undefined ? new Point(x, i) : new Point(i, y);
        if (state.get(pt) === 0) {
            return pt;
        }
    }
};

AI.prototype.searchDiagonal = function(state, i) {
    var flip,
        pt;
    if (i === 2 * state.N) {
        for (var i = 0; i < state.N; i++) {
            pt = new Point(i, i);
            if (state.get(pt) === 0) {
                return pt;
            }
        }
    } else {
        // TODO: A mathematical approach:
        // 0 => n
        // 1 => n-1
        // 2 => n-2
        // 3 => n-3
        flip = _.range(state.N).reverse();
        for (var i = 0; i < state.N; i++) {
            pt = new Point(i, flip[i]);
            if (state.get(pt) === 0) {
                return pt;
            }
        }
    }
};

// TODO: Abstract away iterating over the board's squares?
AI.prototype.getMove = function(state) {
    var self = this,
        suggestedMove;
    // TODO: Decompose into `block` method?
    _.each(state.score, function(score, i) {
        if (score === state.N - 1) {
            if (i < state.N) {
                suggestedMove = self.searchXorY(state, i, undefined);
            } else if (i < 2 * state.N) {
                suggestedMove = self.searchXorY(state, undefined, i-3);
            } else {
                suggestedMove = self.searchDiagonal(state, i);
            }
        }
    });
    if (!suggestedMove) {
        suggestedMove = this.getRandomMove(state);
    }
    console.log('ai finishes getting a move');
    console.log(suggestedMove);
    return suggestedMove;
};

AI.prototype.getRandomMove = function(state) {
    var randomIndex,
        count = 0,
        MAX = 100;
    while (state.state[randomIndex] !== 0 && count < MAX) {
        count++;
        randomIndex = Math.floor(Math.random() * state.N * state.N);
    }
    return state.pt(randomIndex);
};
