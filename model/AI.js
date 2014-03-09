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

var AI = function(val, team /*, behaviors */) {
    this.val = val;
    this.team = team;
    this.mixin(Array.prototype.slice.call(arguments, 2));
};

AI.prototype.MOVE_VALUE = {
    'WIN': 9,
    'BLOCK_WIN': 8,
    'BLOCK_FORK': 7,
    'BUILD_ROW': 6,
    'RANDOM': 0,
    'NA': -1
};

AI.prototype.mixin = function(behaviors) {
    for (var i = 0; i < behaviors.length; i++) {
        for (var prop in behaviors[i]) {
            AI.prototype[prop] = behaviors[i][prop];
        }
    }
};

// Virtual method. Every AIBehavior* should have this function.
AI.prototype.getMove = function() {};
