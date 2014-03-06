/* Game
 * --------------------------------------------------------------- */

var Game = function(options) {
    this.turn = 0;
    this.board = new Board(options.boardSize);
    this.events = new Events();
    this.boardView = new BoardView(this, options.bootstrapperEl, options.css);
    this.ai = new AI(options.ai.team);
    this.moveManager = new MoveManager(this, options);

    // TODO: This code smells. Can it be optimized?
    // This will be a 1 or -1, for X or O
    this.isTurn = function(val) {
        if (this.turn % 2 === 0) {
            if (val === 1) {
                return true;
            } else {
                return false;
            }
        } else {
            if (val === -1) {
                return true;
            } else {
                return false;
            }
        }
    };
};
