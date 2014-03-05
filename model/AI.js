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

AI.prototype.searchX = function(state, x) {
    var pt, y;
    y = _.find(_.range(state.N), function(y) {
        pt = new Point(x, y);
        return state.get(pt) === 0;
    });
    return new Point(x, y);
};

AI.prototype.searchY = function(state, y) {
    console.log('searching y');
    var pt, x;
    x = _.find(_.range(state.N), function(x) {
        pt = new Point(x, y);
        console.log(pt);
        return state.get(pt) === 0;
    });
    console.log(x);
    console.log(y);
    return new Point(x, y);
};


AI.prototype.getMove = function(state) {
    var self = this,
        suggestedMove;

    // TODO: Decompose into `block` method?
    //console.log('analyze state');
    _.each(state.score, function(score, i) {
        if (score == state.N - 1) {
            switch (i) {
                case 0: case 1: case 2:
                    suggestedMove = self.searchX(state, i);
                    break;
                case 3: case 4: case 5:
                    suggestedMove = self.searchY(state, i-3);
                    break;

            }
        }
    });

    if (!suggestedMove) {
        suggestedMove = this.getRandomMove(state);
    }

    return suggestedMove;
};

AI.prototype.getRandomMove = function(state) {
    var randomIndex;
    while (state.state[randomIndex] !== 0) {
        randomIndex = Math.floor(Math.random() * state.N * state.N);
    }
    return state.pt(randomIndex);
};
