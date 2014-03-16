/* MoveManager
 * --------------------------------------------------------------- */

var MoveManager = function(game) {
    var self = this;
    this.game = game;
    this.board = game.board;
    this.events = game.events;

	this.events.subscribe('clickSquare', function(num) {
	    self.handle_human(num);
	});
    
    if (game.is_turn(XO.ai.team)) {
        this.handleAI();
    }
};

MoveManager.prototype.handle_human = function(idx) {
    if (this.board.is_empty_idx(idx) && this.game.is_turn(XO.human.team)) {
        this.handle_move(this.game, idx, XO.human.team, XO.human.VAL);
    }
};

MoveManager.prototype.handleAI = function() {
    var move = this.game.ai.get_move(this.game.board, this.game.score);
    this.handle_move(this.game, move.idx, XO.ai.team, XO.ai.VAL);
};

MoveManager.prototype.handle_move = function(game, idx, team, val) {
    this.board.set(idx, team);
    this.board.view.update(idx);
    this.game.turn += 1;
    this.game.score.update(idx, val);

    var gameOver = this.game.score.is_over(),
        boardFull = this.board.is_full();

    if ((!gameOver && !boardFull) && game.is_turn(XO.ai.team)) {
        this.handleAI();
    } else if (gameOver) {
        this.game_over(team + ' wins');
    } else if (boardFull) {
        this.game_over('Draw');
    }
};

MoveManager.prototype.game_over = function(msg) {
    Log.shout(msg);
    this.events.unsubscribe('clickSquare');
};
