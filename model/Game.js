/* Game
 * --------------------------------------------------------------- */

var Game = function(board, singlePlayer) {
    var ai,
        moveManager;

    this.turn = 0;

    if (singlePlayer) {
        ai = new AI();
    }
	
	moveManager = new MoveManagerFactory(board, this, ai).create();
};

Game.prototype.getActivePlayer = function() {
    return this.turn % 2 === 0 ? 1 : -1;
};
