/* BoardView
 * --------------------------------------------------------------- */

var BoardView = function(board) { 
    var self = this;
	this.$el = $('#board');
	this.squareWidth = 48;
	// +2 accounts for the border
	this.boardWidth = board.N * (this.squareWidth + 2);
	this.$el.css({
	    'height': this.boardWidth + 'px',
        'width': this.boardWidth + 'px'
	});
    this.views = [];
    _.each(board.state, function(val, index) {
        self.views.push(
            new SquareView(
                board,
                new Point(index % board.N, Math.floor(index / board.N)),
                self.$el,
                self.squareWidth
            )
        );
	});
};

BoardView.prototype.update = function() {
    _.each(this.views, function(squareView) {
        squareView.update();
    });
};
