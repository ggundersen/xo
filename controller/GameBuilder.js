/* GameBuilder
 * --------------------------------------------------------------- */

var GameBuilder = function(options) {
    var game = new Game();
    game.board = new Board(options.boardSize);
    game.boardView = new BoardView(game.board);
    
    if (options.ai) {
        game.ai = new AI(options.ai.team);
        game.moveManager = new AIMoveManager(game);
    } else {
        game.moveManager = new MoveManager(game);
    }

    return game;
};
