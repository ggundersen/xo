/* GameBuilder
 * --------------------------------------------------------------- */

var GameBuilder = function(options) {
    this.game = new Game();
    this.board = new Board(options.boardSize);
    
    if (options.singlePlayer) {
        // TODO: Make player's team configurable
        this.ai = new AI(-1);
        this.game = new AIGame();
        this.moveManager = new AIMoveManager(this.board, this.game, this.ai);
    } else {
        this.game = new Game();
        this.moveManager = new MoveManager(this.board, this.game);
    }
};

GameBuilder.prototype.create = function() {
    return this.game;
};

