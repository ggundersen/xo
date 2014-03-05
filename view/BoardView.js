/* BoardView
 * --------------------------------------------------------------- */

var BoardView = function(board,css) { 

	var parentEl = document.getElementById('xo-container');
	    el = document.createElement('div'),
	    //squareDim = (css.board.width / board.N) - 2 * css.square.borderWidth,
	    views = [];

	el.id = 'board';
	el.style.width = el.style.height = css.board.width + 'px';
    parentEl.appendChild(el);

    _.each(board.state, function(val, index) {
        views.push(
            new SquareView(
                board,
                new Point(index % board.N, Math.floor(index / board.N)),
                el,
                css
                //squareDim,
                //css.square.borderWidth
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
