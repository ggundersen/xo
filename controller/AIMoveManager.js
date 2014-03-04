/* AIMoveManager
 * --------------------------------------------------------------- */

var AIMoveManager = function(board, game, ai, boardView) {

    var self = this;
    this.board = board;
    this.game = game;
    this.ai = ai;
    this.boardView = boardView;

	Events.subscribe('clickSquare', function(pt) {
	    // TODO: Add check to see if it is the player (human's) turn
        if (self.board.get(pt) === 0) {
           	self.handleMove(board, game, boardView, pt, self.game.getActiveTeam());
            Events.publish('AITurn');
        }
	});

	Events.subscribe('AITurn', function() {
	    var pt = ai.suggestMove(board);
        self.handleMove(board, game, boardView, pt, ai.team);
	});

};

AIMoveManager.prototype.handleMove = function(board, game, boardView, pt, player) {
    board.add(pt, player);
    boardView.update();
    game.turn += 1;
    if (board.isWin()) {
        console.log('Game over');
        Events.unsubscribe('clickSquare');
        Events.unsubscribe('AITurn');
    }
};
