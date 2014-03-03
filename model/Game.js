/* Game
 * --------------------------------------------------------------- */

var Game = function() {

    var turn = 0;

    this.setTurn = function() {
        turn += 1;
    };

    this.getActivePlayer = function() {
        return turn % 2 === 0 ? 1 : -1;
    };

};
