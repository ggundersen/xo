/* BoardView
 * --------------------------------------------------------------- */

var BoardView = function(board) {
    var self = this;
	this.$el = $('#board');
	this.$el.empty();

    _.each(board.state, function(val, index) {
        new SquareView(
            board,
            self.$el,
            new Point(index % 3, Math.floor(index / 3))
        );
	});
};
