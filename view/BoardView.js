/* BoardView
 * --------------------------------------------------------------- */

var BoardView = function(board, boardWidth) { 

	var parentEl = document.getElementById('xo-container');
	    el = document.createElement('div'),
	    border = 1,
	    squareDim = (boardWidth / board.N) - 2*border,
	    views = [];

	el.id = 'board';
	el.style.width = boardWidth + 'px';
    el.style.height = boardWidth + 'px';
    parentEl.appendChild(el);

    _.each(board.state, function(val, index) {
        views.push(
            new SquareView(
                board,
                new Point(index % board.N, Math.floor(index / board.N)),
                el,
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
