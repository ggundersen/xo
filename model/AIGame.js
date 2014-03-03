/* AIGame
 * --------------------------------------------------------------- */

var AIGame = function() {
    this.turn = 0;
};

AIGame.prototype.getActiveTeam = function() {
    return this.turn % 2 === 0 ? 1 : -1;
};

AIGame.prototype.isPlayersTurn = function() {
    return this.turn % 2 === 0 ? true : false;
};
