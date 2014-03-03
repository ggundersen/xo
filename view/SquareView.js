/* SquareView
 * --------------------------------------------------------------- */

var SquareView = function(board, $parentEl, pt, squareWidth) {
    this.pt = pt;
    this.board = board;
	this.$el = $('<div class="square"></div>');
	this.$el.css({
        'height': squareWidth + 'px',
        'width': squareWidth + 'px'
	});
	$parentEl.append( this.$el );
	Events.publish(this.$el, 'click', 'clickSquare', this);
};

SquareView.prototype.update = function() {
    var piece = this.board.get(this.pt) === 1 ? 'X' : 'O'
    this.$el.text(piece);
};
