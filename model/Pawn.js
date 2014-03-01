/* Pawn
 * --------------------------------------------------------------- */

var Pawn = function(board, pt, direction, color) {
	Piece.call(this, color);
	this.board = board;
	this.x = pt.x;
	this.y = pt.y;
	this.firstMove = true;
	this.direction = direction;
};

Pawn.prototype = Object.create(Piece.prototype);

Pawn.prototype.getDx = function(dx) {
    return this.direction === 1 ? this.x + dx : this.x - dx;
};

Pawn.prototype.getPossibleMoves = function() {
    var oneAhead,
        twoAhead,
        leftAhead,
        rightAhead,
        possibleMoves = [];

    oneAhead = this.board.getSquareAt( new Point(this.getDx(1), this.y) ); 
    if (oneAhead.piece === undefined) {
        possibleMoves.push( new Point(oneAhead.pt.x, this.y) );
    }

    twoAhead = this.board.getSquareAt( new Point(this.getDx(2), this.y )); 
    if (this.firstMove && twoAhead.piece === undefined ) {
        this.firstMove = false;
        possibleMoves.push( new Point(twoAhead.pt.x, this.y) );
    }

    leftAhead = this.board.getSquareAt( new Point(this.getDx(1), this.y - 1) );
    if (leftAhead.piece && this.color !== leftAhead.piece.color) {
        possibleMoves.push( new Point(leftAhead.pt.x, leftAhead.pt.y) );
    }

    rightAhead = this.board.getSquareAt( new Point(this.getDx(1), this.y + 1) );
    if (rightAhead.piece && this.color !== leftAhead.piece.color) {
        possibleMoves.push( new Point(rightAhead.pt.x, rightAhead.pt.y) );
    }

    console.log(possibleMoves);
    return possibleMoves;
};
