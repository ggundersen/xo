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

	this.events.subscribe('clickSquare', function(num) {
	    self.handle_human(num);
	});
    
    if (game.is_turn(this.ai.team)) {
        this.handleAI();
    }
};

MoveManager.prototype.handle_human = function(idx) {
    if (this.board.is_empty(idx) && this.game.is_turn(this.human.team)) {
        this.handle_move(this.game, idx, this.human.team, this.human.val);
    }
};

MoveManager.prototype.handleAI = function() {
    var idx = this.game.ai.get_move(this.game.board, this.game.score);
    this.handle_move(this.game, idx, this.ai.team, this.ai.val);
};

MoveManager.prototype.handle_move = function(game, idx, player, team) {
    this.board.set(idx, player);
    this.board.view.update(idx);
    this.game.turn += 1;
    this.game.score.update(idx, team);

    var gameOver = this.game.score.is_over(),
        boardFull = this.board.is_full();

    if ((!gameOver && !boardFull) && game.is_turn(this.ai.team)) {
        this.handleAI();
    } else if (gameOver) {
        this.game_over(player + ' wins');
    } else if (boardFull) {
        this.game_over('draw');
    }
};

// TODO: Make this a proper view
MoveManager.prototype.game_over = function(msg) {
    var game_overEl = document.createElement('div'),
        boardEl = document.getElementById('board');
    game_overEl.className = 'over';
    game_overEl.innerHTML = msg;
    boardEl.appendChild(game_overEl);
    this.events.unsubscribe('clickSquare');
};
