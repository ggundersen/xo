/* BoardView
 * --------------------------------------------------------------- */

var BoardView = function(board, boardWidth) { 

	var $el = $('#board'),
	    border = 1,
	    squareDim = (boardWidth / board.N) - 2*border,
	    views = [];

	$el.css({
	    'height': boardWidth + 'px',
        'width': boardWidth + 'px'
	});

    _.each(board.state, function(val, index) {
        views.push(
            new SquareView(
                board,
                new Point(index % board.N, Math.floor(index / board.N)),
                $el,
                squareDim,
                border
            )
        );
	});

	return {
        update: function(pt) {
            _.each(views, function(squareView) {
                if (_.isEqual(squareView.pt, pt)) {
                    squareView.update();
                }
            });
        }
	};
};
