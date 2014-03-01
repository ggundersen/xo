/* Side
 * --------------------------------------------------------------- */

var Side = function(color, board, game) {

	var i = 0,
		backRank = (color === CONST.LIGHT ? 0 : 7),
		pawnRank = backRank + (backRank === 0 ? 1 : -1),
		direction = (color === CONST.LIGHT ? 1 : -1),
		startX = (color === CONST.LIGHT ? 1 : 6);

	for (; i < 8; i++) {
	    var pt = new Point(pawnRank, i);
	    var piece = new Pawn(board, pt, direction, color);
		board.placePieceAt(pt, piece);
	}

	board.placePieceAt( new Point(backRank, 4), new King(color) );

};
