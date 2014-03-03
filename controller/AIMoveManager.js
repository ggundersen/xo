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
           	self.handleMove(pt, self.game.getActiveTeam());
            Events.publish('AITurn');
        }
	});

	Events.subscribe('AITurn', function() {
        var pt = ai.suggestMove(board);
        self.handleMove(pt, ai.team);
	});

};

AIMoveManager.prototype.handleMove = function(pt, player) {
    this.board.add(pt, player);
    this.boardView.update();
    this.game.turn += 1;
    if (this.board.isWin()) {
        console.log('Game over');
        Events.unsubscribe('clickSquare');
        Events.unsubscribe('AITurn');
    }
};
