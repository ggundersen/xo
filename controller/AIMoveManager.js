/* AIMoveManager
 * --------------------------------------------------------------- */

var AIMoveManager = function(game) {
    var self = this;

	Events.subscribe('clickSquare', function(pt) {
	    // TODO: Add check to see if it is the player (human's) turn
        if (game.board.get(pt) === 0) {
           	self.handleMove(game, pt, game.getActiveTeam());
            Events.publish('AITurn');
        }
	});

	Events.subscribe('AITurn', function() {
	    var pt = game.ai.suggestMove(game.board);
        self.handleMove(game, pt, game.ai.team);
	});

};

AIMoveManager.prototype.handleMove = function(game, pt, player) {
    game.board.add(pt, player);
    game.boardView.update();
    game.turn += 1;
    if (game.board.isWin()) {
        console.log('Game over');
        Events.unsubscribe('clickSquare');
        Events.unsubscribe('AITurn');
    }
};
