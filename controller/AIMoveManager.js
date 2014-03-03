/* AIMoveManager
 * --------------------------------------------------------------- */

var AIMoveManager = function(board, game, ai, boardView) {
	
	Events.subscribe('clickSquare', function(squareView) {
	    if (game.isPlayersTurn() && board.get(squareView.pt) < 0) {
            board.add(squareView.pt, game.getActivePlayer());
	        squareView.update();
	        game.turn += 1;
            Events.fire('AITurn');
            if (board.isWin()) {
                console.log('Game over');
                Events.unsubscribe('clickSquare');
                Events.unsubscribe('AITurn');
            }
	    }
	});

	Events.subscribe('AITurn', function() {
        console.log('AI\'s turn');
        var move = ai.suggestMove(board);
        board.add(move);

        for (var i = 0; i < boardView.views.length; i++) {
            //console.log(boardView.views[i]);
            if (_.isEqual(boardView.views[i].pt), move) {
                console.log('view found!');
                boardView.views[i].update();
                return;
            }
        }
	});

};

