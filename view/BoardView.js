/* BoardView
 * --------------------------------------------------------------- */

var BoardView = function(game, el, css) { 

	var views = [];
    el.innerHTML = '';
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
