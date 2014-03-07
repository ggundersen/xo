/* AI Random
 * --------------------------------------------------------------- */

var AIRandom = function(val) {
    this.val = val;
};

AIRandom.prototype = Object.create(AIAbstract.prototype);

AIRandom.prototype.getMove = function(game) {
    return this.random(game.board, this.MOVE_VALUE.RANDOM, 0).pt;
};
