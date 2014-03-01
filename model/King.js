/* King
 * --------------------------------------------------------------- */

var King = function(color) {
	Piece.call(this, color);
};

King.prototype = Object.create(Piece.prototype);

King.prototype.validate = function(move) {
    return move;
};
