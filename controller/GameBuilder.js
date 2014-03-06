/* GameBuilder
 * --------------------------------------------------------------- */

var GameBuilder = function(options) {
    
    game = new Game();
    game.board = new Board(options.boardSize);
    game.events = new Events();
    
    // Is this fundamentally different from game?
    game.boardView = new BoardView(game, options.elName, options.css);
  
    if (options.ai) {
        // TODO: The AI should be constructed with a use-selected
        // algorithm.
        game.ai = new AI(options.ai.team);
        game.moveManager = new AIMoveManager(game);
    } else {
        game.moveManager = new MoveManager(game);
    }
};
