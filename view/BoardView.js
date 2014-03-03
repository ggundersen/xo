/* BoardView
 * --------------------------------------------------------------- */

var BoardView = function(board) {
    var self = this;
	this.$el = $('#board');
	
	this.squareWidth = 48;
	// Accounts for the border
	this.boardWidth = board.N * (this.squareWidth + 2);
	this.$el.css({
	    'height': this.boardWidth + 'px',
        'width': this.boardWidth + 'px'
	});

    _.each(board.state, function(val, index) {
        new SquareView(
            board,
            self.$el,
            new Point(index % board.N, Math.floor(index / board.N)),
            self.squareWidth
        );
	});
};
