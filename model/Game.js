/* Game
 * --------------------------------------------------------------- */

var Game = function(options) {
    this.turn = 0;
    this.board = new Board(options.boardSize);
    this.events = new Events();
    this.ai = new AIFactory(options.ai);
    this.scores = new Scores(this.board);
    
    /*_.map(_.range(2 * options.boardSize + 2), function() {
        return 0;
    });*/

    this.board.view = new BoardView(this, options.bootstrapperEl, options.css);
    
    // TODO: This guy has to be instantiate *after* this.score,
    // otherwise the AI won't know the score. This seems too
    // tightly coupled.
    this.moveManager = new MoveManager(this, options.human, options.ai);
};

Game.prototype.isTurn = function(team) {
    if (this.turn % 2 === 0 && team === XO.CONST.CROSSES) {
        return true;
    } else if (this.turn % 2 !== 0 && team === XO.CONST.NOUGHTS) {
        return true;
    }
    return false;
};
