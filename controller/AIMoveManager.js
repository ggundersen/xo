/* AIMoveManager
 * --------------------------------------------------------------- */

var AIMoveManager = function(game) {
    var self = this;

	game.events.subscribe('clickSquare', function(pt) {
	    // TODO: Add check to see if it is the player (human's) turn
        if (game.board.get(pt) === 0) {

            // This is a race condition at the very end? 
           	self.handleMove(game, pt, game.getActiveTeam());

           	if (!game.board.isFull()) {
                setTimeout(function() {
                    game.events.publish('AITurn');
                });
            }
        }
	});

	game.events.subscribe('AITurn', function() {
	    var pt = game.ai.getMove(game.board);
        self.handleMove(game, pt, game.ai.team);
	});

};

AIMoveManager.prototype.handleMove = function(game, pt, player) {
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
