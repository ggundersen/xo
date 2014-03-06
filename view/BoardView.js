/* BoardView
 * --------------------------------------------------------------- */

var BoardView = function(board, css) { 

	var el = document.getElementById('board'),
	    views = [];

	el.id = 'board';
	el.style.width = el.style.height = css.board.width + 'px';

    _.each(board.state, function(val, index) {
        views.push(new SquareView(board, board.pt(index), el, css) );
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
