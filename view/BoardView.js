/* BoardView
 * --------------------------------------------------------------- */

var BoardView = function(game, el, css) { 

	var views = [];
    el.innerHTML = '';
	el.style.width = el.style.height = css.board.width + 'px';

    game.board.each(function(val, index) {
        views.push(new SquareView(game, index, el, css));
	});

	return {
        update: function(index) {
            _.each(views, function(squareView) {
                if (squareView.index == index) {
                    squareView.update();
                }
            });
        }
	};
};
