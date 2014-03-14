/* AI
 *
 * http://programmers.stackexchange.com/a/228680/115607
 *
 * The critical observation made by Mario is that an FP approach to
 * this problem is to have the AI consume a board board--not
 * necessarily even the current one--and return a suggested move.
 *
 * Consider an alternative, where the AI manipulates (i.e. makes the
 * move) the board's board itself. Then you would have mutation at
 * multiple points in the program.
 * --------------------------------------------------------------- */

var AI = function(val, team /*, mixins */) {
    
    // We do not want to add behaviors to `AI.prototype`, since that
    // would make the methods available to every instance of `AI`.
    // Rather, we want to add them to an individual instance and
    // return that instance.
    var aiInstance = {
        val: val,
        team: team,
        human: 1, // TODO: Why do these options need to be configurable?

        // http://en.wikipedia.org/wiki/Tic-tac-toe#Strategy
        MOVE_VALUE: {
            'WIN': 1,
            'BLOCK_WIN': 2,
            'FORK': 3,
            'BLOCK_FORK': 4,
            'RANDOM': 5,
            'OPPOSITE_CORNER': 6,
            'EMPTY_CORNER': 7,
            'EMPTY_SIDE': 8,
            'RANDOM': 9
        }

    };
    this.mixin(aiInstance, Array.prototype.slice.call(arguments, 2));
    
    return aiInstance;
};

AI.prototype.mixin = function(obj, behaviors) {
    for (var i = 0; i < behaviors.length; i++) {
        for (var prop in behaviors[i]) {
            obj[prop] = behaviors[i][prop];
        }
    }
};

// Virtual method. Every AIBehavior* should have this function.
AI.prototype.get_move = function() {
    throw new Error('`get_move` was not subclassed properly.');
};
