/* MoveManager
 * --------------------------------------------------------------- */

var MoveManager = function(board, game) {
	
	Events.on('clickSquare', function(squareView) {
	    if (board.get(squareView.pt) < 0) {
            board.add(squareView.pt, game.getActivePlayer());
	        squareView.update();

	        game.setTurn();;

            if (board.isWin()) {
               console.log('Game over');
            }
	    }
	});

};
