/* Game
 * --------------------------------------------------------------- */

var Game = function(options) {
    this.turn = 0;
    this.board = new Board();
    this.events = new Events();
    this.human = options.human;
    this.ai = new AIFactory(options.ai);

    this.score = new Score(this.board);
    
    this.board.view = new BoardView(this.board, this.events, options.css);
    
    // TODO: This guy has to be instantiate *after* this.score,
    // otherwise the AI won't know the score. This seems too
    // tightly coupled.
    this.moveManager = new MoveManager(this, options.ai);
};

Game.prototype.is_turn = function(team) {
    if ((this.turn % 2 === 0 && team === XO.CROSSES) ||
        (this.turn % 2 !== 0 && team === XO.NOUGHTS)
    ) {
        return true;
    }
    return false;
};
