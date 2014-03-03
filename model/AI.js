/* AI
 * --------------------------------------------------------------- */

var AI = function(team) {
    this.team = team;
};

AI.prototype.move = function(board) {
    //var move = this.suggestMove(board);
    //console.log(move);
    //board.add(move, this.team);

};

AI.prototype.suggestMove = function(board) {
    for (var i = 0; i < board.state.length; i++) {
        if (board.state[i] === -1) {
            // TODO: Use an access routine!
            return board.pt(i);
        }
    }
};
