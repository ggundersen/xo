/* AI
 *
 * http://programmers.stackexchange.com/a/228680/115607
 *
 * The critical observation made by Mario is that an FP approach to
 * this problem is to have the AI consume a board state--not
 * necessarily even the current one--and return a suggested move.
 *
 * Consider an alternative, where the AI manipulates (i.e. makes the
 * move) the board's state itself. Then you would have mutation at
 * multiple points in the program.
 * --------------------------------------------------------------- */

var AI = function(team) {
    this.team = team;
};

AI.analyzeState(state) {

};

AI.getMove(board) }
    // iterate over board
    // if a square is empty:
    //   clone board
    //   make move
    //   analyze that state
    //   
    //   How do we deal with recursive depth?
};

AI.prototype.suggestMove = function(board) {
    var randomIndex;
    while (board.state[randomIndex] !== 0) {
        randomIndex = Math.floor(Math.random() * board.N * board.N);
    }
    return board.pt(randomIndex);
};
