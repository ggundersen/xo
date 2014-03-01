/* Square
 * --------------------------------------------------------------- */

var Square = function(pt, color) {
	this.pt = pt;
	this.color = color;
	this.piece = undefined;
	this.view = undefined;
};

Square.prototype.subscribe = function(view) {
	this.view = view;
};

Square.prototype.placePiece = function(piece) {
	this.piece = piece;
	this.view.update(piece);
};

Square.prototype.removePiece = function() {
	this.piece = undefined;
	this.view.update();
};