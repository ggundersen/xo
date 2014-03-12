/* AIRandom
 * --------------------------------------------------------------- */

var AIRandom = {
  
    // `getMove` is a little complicated--getting a Move instance and
    // then returning only its index--because it is used with other
    // behaviors and needs to be compatible.
    get_move: function(game) {
        return this.get_random_move(game.board, this.MOVE_VALUE.RANDOM).num; 
    },

    get_random_move: function(board, moveVal) {
        var randomNum;
        do {
            randomNum = '_' + Math.floor(Math.random() * 8 + 1);
        } while (!board.is_empty(randomNum));

        return new Move(randomNum, moveVal);
    }

};
