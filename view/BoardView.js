/* BoardView
 * --------------------------------------------------------------- */

var BoardView = function(game, el, css) { 

	var views = [];
    el.innerHTML = '';
	el.style.width = el.style.height = css.boardWidth + 'px';

	game.board.each(function(obj, idx) {
        views.push(new SquareView(game, idx, el, css));
	});

    // TODO: Pull out Underscore.js if this is one of the only
    // places it is used.
	return {
        update: function(idx) {
            _.each(views, function(squareView) {
                if (idx === squareView.idx) {
                    squareView.update();
                }
            });
        }
	};
};
