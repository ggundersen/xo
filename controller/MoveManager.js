/* MoveManager
 * --------------------------------------------------------------- */

// TODO: Reconsider this program control. Currently, we *always*
// listen for the human to click and tell the AI to go 
var MoveManager = function(game, human, ai) {
    var self = this;
    this.game = game;
    this.board = game.board;
    this.human = human;

    // TODO: `ai` is a confi object; not the AI itself. This is
    // confusing.
    this.ai = ai;
    this.events = game.events;

	this.events.subscribe('clickSquare', function(index) {
	    console.log('square clicked: ' + index);
	    self.handleHuman(index);
	});
    
    if (game.isTurn(this.ai.team)) {
        this.handleAI();
    }
};

MoveManager.prototype.handleHuman = function(index) {
    if (this.board.isEmpty(index) && this.game.isTurn(this.human.team)) {
        this.handleMove(this.game, index, this.human.team, this.human.val);
    }
};

MoveManager.prototype.handleAI = function() {
    var index = this.game.ai.getMove(this.game);
    this.handleMove(this.game, index, this.ai.team, this.ai.val);
};

MoveManager.prototype.handleMove = function(game, index, player, val) {

    this.board.set(index, player);
    this.board.view.update(index);
    this.game.turn += 1;
    this.game.updateScore(index, val);
    
    var gameOver = this.game.isWin();
    var boardFull = this.board.isFull();

    if ((!gameOver && !boardFull) && game.isTurn(this.ai.team)) {
        this.handleAI();
    } else if (gameOver) {
        this.gameOver(player + ' wins');
    } else if (boardFull) {
        this.gameOver('draw');
    }
};

// TODO: Make this a proper view
MoveManager.prototype.gameOver = function(msg) {
    var gameOverEl = document.createElement('div'),
        boardEl = document.getElementById('board');
    gameOverEl.className = 'over';
    gameOverEl.innerHTML = msg;
    boardEl.appendChild(gameOverEl);
    this.events.unsubscribe('clickSquare');
};
