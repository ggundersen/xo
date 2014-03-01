/* SquareView
 * --------------------------------------------------------------- */

var SquareView = function(board, $parentEl, pt) {
    this.pt = pt;
    this.board = board;
	this.$el = $('<div class="square"></div>');
	$parentEl.append( this.$el );
	Events.publish(this.$el, 'click', 'clickSquare', this);
};

SquareView.prototype.update = function() {
    var piece = this.board.get(this.pt) === 0 ? '0' : 'x'
    this.$el.text(piece);
};
