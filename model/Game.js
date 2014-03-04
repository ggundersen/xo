/* Game
 * --------------------------------------------------------------- */

var Game = function() {
    this.turn = 0;
};

Game.prototype.getActiveTeam = function() {
    return this.turn % 2 === 0 ? 1 : -1;
};

// This does not apply to non-AI games?
Game.prototype.isPlayersTurn = function() {
    return this.turn % 2 === 0 ? true : false;
};
