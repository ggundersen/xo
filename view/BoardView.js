/* BoardView
 * --------------------------------------------------------------- */

var BoardView = function(game, el, css) { 

	var views = [];
    el.innerHTML = '';
	el.style.width = el.style.height = css.boardWidth + 'px';

	game.board.each(function(obj, idx) {
        views.push(new SquareView(game, idx, el, css));
	});

	return {
        update: function(idx) {
            var squareView,
                i = 0,
                len = views.length;

            for (; i < len; i++) {
                squareView = views[i];
                if (idx === squareView.idx) {
                     squareView.update();
                }
            }
        }
	};
};
