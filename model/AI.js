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

AI.prototype.MOVE_VALUES = {
    'WIN': 3,
    'BLOCK': 1,
    'RANDOM': 0,
    'NA': -1
};

// `getMove` is the AI's `main` function. All other functions are
// called from here.
AI.prototype.getMove = function(state) {
    var suggestedMoves = [];
    suggestedMoves.push( this.win(state) );
    suggestedMoves.push( this.block(state) );
    suggestedMoves.push( this.getRandomMove(state) );
    return AI.prototype.analyze(suggestedMoves).pt;
};

AI.prototype.analyze = function(moves) {
    var finalMove = {
        pt: undefined,
        val: -1
    };

    _.each(moves, function(move) {
        if (move.pt !== undefined && move.val > finalMove.val) {
            finalMove = move;
        }
    });

    return finalMove;
};

AI.prototype.win = function(state) {
    var self = this,
        suggestedMove = {
            val: this.MOVE_VALUES.WIN
        };

    state.eachScore(function(score, i) {
        // TODO: Don't bake this in.
        if (score === -2) {
            if (i < state.N) {
                suggestedMove.pt = self.searchXorY(state, i, undefined);
            } else if (i < 2 * state.N) {
                suggestedMove.pt = self.searchXorY(state, undefined, i-3);
            } else {
                suggestedMove.pt = self.searchDiagonal(state, i);
            }
        }
    });

    console.log(suggestedMove);

    return suggestedMove;
};

AI.prototype.block = function(state) {
    var self = this,
        suggestedMove = {
            val: this.MOVE_VALUES.BLOCK
        };

    state.eachScore(function(score, i) {
        // TODO: This will *only* work if the AI is 'O's, or negative number
        if (score === state.N - 1) {
            if (i < state.N) {
                suggestedMove.pt = self.searchXorY(state, i, undefined);
            } else if (i < 2 * state.N) {
                suggestedMove.pt = self.searchXorY(state, undefined, i-3);
            } else {
                suggestedMove.pt = self.searchDiagonal(state, i);
            }
        }
    });

    return suggestedMove;
};

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
    var pt;
    if (i === 2 * state.N) {
        for (var i = 0; i < state.N; i++) {
            pt = new Point(i, i);
            if (state.get(pt) === 0) {
                return pt;
            }
        }
    } else {
        for (var i = 0; i < state.N; i++) {
            pt = new Point(i, this.flip(state.N - 1, i));
            if (state.get(pt) === 0) {
                return pt;
            }
        }
    }
};

AI.prototype.getRandomMove = function(state) {
    var randomIndex,
        count = 0,
        MAX = 100,
        suggestedMove = {
            val: this.MOVE_VALUES.RANDOM
        };

    while (state.state[randomIndex] !== 0 && count < MAX) {
        count++;
        randomIndex = Math.floor(Math.random() * state.N * state.N);
    }
    suggestedMove.pt = state.pt(randomIndex);

    return suggestedMove;
};

// `flip` is a elper function:
// 0 => 2-0 => 2
// 1 => 2-1 => 1
// 2 => 2-2 => 0
AI.prototype.flip = function(m, n) {
    return m - n;
};
