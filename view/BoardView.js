/* BoardView
 * --------------------------------------------------------------- */

var BoardView = function(game, elName, css) { 

	var el = document.getElementById(elName),
	    views = [];

    el.innerHTML = '';
	el.id = 'board';
	el.style.width = el.style.height = css.board.width + 'px';

    _.each(game.board.state, function(val, index) {
        views.push(new SquareView(game, game.board.pt(index), el, css) );
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
