/* BoardView
 * --------------------------------------------------------------- */

var BoardView = function(board, events, css) { 

	var views = [];
	el = document.getElementById('board');
    el.innerHTML = '';
	el.style.width = el.style.height = css.boardWidth + 'px';

	board.each(function(obj, idx) {
        views.push(new SquareView(idx, board, events, el, css));
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
