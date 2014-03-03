/* AI
 * --------------------------------------------------------------- */

var AI = function(team) {
    this.team = team;
};

AI.prototype.suggestMove = function(board) {

    //var randomX = Math.floor(Math.random() * board.N),
    //    randomY = Math.floor(Math.random() * board.N);

    for (var i = 0; i < board.state.length; i++) {
        if (board.state[i] === 0) {
            // TODO: Use an access routine!
            return board.pt(i);
        }
    }
};
