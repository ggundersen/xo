/* Piece
 * --------------------------------------------------------------- */

var Piece = function(color) {
	this.color = color;
};

Piece.prototype.isNormal = function(move) {
    if (!move.target.piece) {
        return true;
	}
	return false;
};

Piece.prototype.isAttack = function(move) {
    if (move.target.piece &&
        move.target.piece.color !== move.source.piece.color) {
        return true;
    }
	return false;
};

// http://stackoverflow.com/a/4610237/1830334
// If a subclass of Piece returns true/false based on a Move
// objected passed to it, then in order to get possible moves,
// I have to pass every possible combination to every piece types.
// This is exhaustive. What I should do is have every piece tell
// where it can move. Then I can query for that, get all the
// results for each piece, and then rank the results.
Piece.prototype.getPossibleMoves = function() {

};
