/* Game
 * --------------------------------------------------------------- */

var Game = function() {
    this.turn = 0;
};

Game.prototype.getActivePlayer = function() {
    return this.turn % 2 === 0 ? 1 : -1;
};
