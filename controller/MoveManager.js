/* MoveManager
 * --------------------------------------------------------------- */

var MoveManager = function(game, options) {
    var self = this;

    // The MoveManager should know whose turn it is and ASK them for
    // a move. It asks the AI explicitly and it asks the user by
    // listening.
	game.events.subscribe('clickSquare', function(pt) {
        console.log(game.isTurn(options.human.team));
        if (game.board.get(pt) === 0 && game.isTurn(options.human.team)) {
           	self.handleMove(game, pt, options.human.team);
           	if (!game.board.isFull()) {
                // This event model is fundamentally flawed. We
                // are telling the AI to go. The AI is told to
                // go based on the turn.
                game.events.publish('AITurn');
            }
        }
	});

	game.events.subscribe('AITurn', function() {
	    var pt = game.ai.getMove(game.board);
        self.handleMove(game, pt, options.ai.team);
	});

    if (game.turn === 0 && options.ai.team === 1) {
        console.log('first move');
        game.events.publish('AITurn');
    }

};


MoveManager.prototype.handleMove = function(game, pt, player) {
    game.board.add(pt, player);
    game.boardView.update(pt);
    game.turn += 1;

    if (game.board.isWin()) {

        // TODO: Make this a proper view
        var gameOver = document.createElement('div'),
            boardEl = document.getElementById('board');

        gameOver.className = 'over';
        gameOver.innerHTML = 'Game Over';
        board.appendChild(gameOver);

        game.events.unsubscribe('clickSquare');
        game.events.unsubscribe('AITurn');
    }
};

