/* MoveManager
 * --------------------------------------------------------------- */

var MoveManager = function(game) {
	
	Events.subscribe('clickSquare', function(squareView) {
	    if (game.board.get(squareView.pt) < 0) {
            game.board.add(squareView.pt, game.getActivePlayer());
	        squareView.update();
	        game.turn += 1;
            if (game.board.isWin()) {
                console.log('Game over');
                Events.unsubscribe('clickSquare');
            }
	    }
	});

};
