/* SquareView
 * --------------------------------------------------------------- */

var SquareView = function(board, pt, $parentEl, squareWidth) {
    this.pt = pt;
    this.board = board;
	this.$el = $('<div class="square"></div>');
	this.$el.css({
        'height': squareWidth + 'px',
        'width': squareWidth + 'px'
	});
	$parentEl.append( this.$el );
	Events.on(this.$el, 'click', 'clickSquare', this.pt);
};

SquareView.prototype.update = function() {
    var piece;

    if (this.board.get(this.pt) === 1) {
        piece = 'X';
    } else if (this.board.get(this.pt) === -1) {
        piece = 'O';
    } else {
        piece = '';
    }
    this.$el.text(piece);
};
