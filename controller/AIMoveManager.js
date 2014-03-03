/* AIMoveManager
 * --------------------------------------------------------------- */

var AIMoveManager = function(board, game, ai) {
	
	Events.subscribe('clickSquare', function(squareView) {
	    if (game.isPlayersTurn() && board.get(squareView.pt) < 0) {
            board.add(squareView.pt, game.getActivePlayer());
	        squareView.update();
	        game.turn += 1;

            Events.fire('AITurn');

            if (board.isWin()) {
                console.log('Game over');
                Events.unsubscribe('clickSquare');
            }
	    }
	});

	Events.subscribe('AITurn', function() {
        console.log('AI\'s turn');
        ai.move(board);
	});

};

