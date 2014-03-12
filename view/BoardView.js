/* BoardView
 * --------------------------------------------------------------- */

var BoardView = function(game, el, css) { 

	var views = [];
    el.innerHTML = '';
	el.style.width = el.style.height = css.boardWidth + 'px';

	game.board.each(function(num) {
        views.push(new SquareView(game, num, el, css));
	});

	return {
        update: function(num) {
            _.each(views, function(squareView) {
                if (num === squareView.num) {
                    squareView.update();
                }
            });
        }
	};
};
