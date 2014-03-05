/* BoardView
 * --------------------------------------------------------------- */

var BoardView = function(board, css) { 

	var el = document.getElementById('board'),
	    views = [];

	el.id = 'board';
	el.style.width = el.style.height = css.board.width + 'px';
    //parentEl.appendChild(el);

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
