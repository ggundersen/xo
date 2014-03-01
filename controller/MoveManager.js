/* MoveManager
 * --------------------------------------------------------------- */

var MoveManager = function(board, game) {
	
	Events.on('clickSquare', function(squareView) {
	    if (board.get(squareView.pt) < 0) {
            board.add(squareView.pt, game.turn % 2);
	        squareView.update();
	        game.turn += 1;
	    }
	});

};
