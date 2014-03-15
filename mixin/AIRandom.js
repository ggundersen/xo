/* AIRandom
 * --------------------------------------------------------------- */

var AIRandom = {

    random: function(board, moveVal) {
        var randomIdx;
        do {
            randomIdx = Math.floor(Math.random() * 8 + 1);
        } while (!board.is_empty(randomIdx));
        return new Move(randomIdx, moveVal);
    }

};
