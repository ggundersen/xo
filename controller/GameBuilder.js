/* GameBuilder
 * --------------------------------------------------------------- */

var GameBuilder = function(options) {
    this.game = new Game();
    this.board = new Board(options.boardSize);
    
    if (options.singlePlayer) {
        this.ai = new AI();
        this.moveManager = new AIMoveManager(this.board, this.game, this.ai);
    } else {
        this.moveManager = new MoveManager(this.board, this.game);
    }
};

GameBuilder.prototype.create = function() {
    return this.game;
};

