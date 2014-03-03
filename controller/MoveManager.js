/* MoveManager
 * --------------------------------------------------------------- */

var MoveManager = function(board, game) {
	
	Events.subscribe('clickSquare', function(squareView) {
	    if (board.get(squareView.pt) < 0) {
            board.add(squareView.pt, game.getActivePlayer());
	        squareView.update();

	        game.turn += 1;

            if (board.isWin()) {
                console.log('Game over');
                Events.unsubscribe('clickSquare');
            }
	    }
	});

};
