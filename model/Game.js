/* Game
 * --------------------------------------------------------------- */

var Game = function(board) {
    
    // First move is by X
    this.turn = 1;

    this.board = board;

    this.isOver = function() {
        if (this.turn === 0) {
            return this.isTriple(this.board.os);
        } else {
            return this.isTriple(this.board.xs);
        }
    };

    this.isTriple = function(pieces) {
        if (pieces.length < 3) {
            return false;
        } else {
            return true;
        }
    };

};
