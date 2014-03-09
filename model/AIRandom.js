/* AIRandom
 * --------------------------------------------------------------- */

var AIRandom = function(val) {
    this.val = val;
};

_.extend(AIRandom.prototype, AIBehaviorAbstract, AIBehaviorRandom);

AIRandom.prototype.getMove = function(game) {
    return this.getRandomMove(game.board, this.MOVE_VALUE.RANDOM).pt; 
};
