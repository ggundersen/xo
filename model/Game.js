/* Game
 * --------------------------------------------------------------- */

// TODO: What the hell does `Game` do? Should it not just take a
// config object and instantiate itself?
var Game = function(options) {
    this.turn = 0;
    this.board = new Board(options.boardSize);
    this.events = new Events();
    this.boardView = new BoardView(this, options.elName, options.css);
    this.ai = new AI(options.ai.team);
    this.moveManager = new MoveManager(this, options);
};
