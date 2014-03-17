/* Game
 * --------------------------------------------------------------- */

var Game = function(options) {
    this.turn = 0;
    this.board = new Board();
    this.events = new Events();
    this.human = options.human;
    this.ai = new AIFactory(options.ai.skill);
    this.score = new Score(this.board);
    this.board.view = new BoardView(this.board, this.events, options.css);
    this.moveManager = new MoveManager(this, this.board, this.events);
};

Game.prototype.is_turn = function(team) {
    if ((this.turn % 2 === 0 && team === XO.CROSSES) ||
        (this.turn % 2 !== 0 && team === XO.NOUGHTS)
    ) {
        return true;
    }
    return false;
};
