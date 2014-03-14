/* AIRandom
 * --------------------------------------------------------------- */

var AIRandom = {

    // TODO: AIRandom is really a way of *making* moves, alongside
    // AIRules.
    get_move: function(game) {
        return this.random(game.board, this.MOVE_VALUE.RANDOM).idx; 
    },

    random: function(board, moveVal) {
        var randomIdx;
        do {
            randomIdx = Math.floor(Math.random() * 8 + 1);
        } while (!board.is_empty(randomIdx));
        return new Move(randomIdx, moveVal);
    }

};
