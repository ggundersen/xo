/* BoardView
 * --------------------------------------------------------------- */

var BoardView = function(game, el, css) { 

	var views = [];
    el.innerHTML = '';
	el.style.width = el.style.height = css.board.width + 'px';

    game.board.each(function(val, pt) {
        views.push(new SquareView(game, pt, el, css));
	});

	return {
        update: function(pt) {
            _.each(views, function(squareView) {
                var sqPt = squareView.pt;
                if (sqPt.x === pt.x && sqPt.y === pt.y) {
                    squareView.update();
                }
            });
        }
	};
};
