/* AIBehaviorRandom
 * --------------------------------------------------------------- */

var AIBehaviorRandom = {
  
    // `getMove` is a little complicated--getting a Move instance and
    // then returning only its index--because it is used with other
    // behaviors and needs to be compatible.
    getMove: function(game) {
        return this.getRandomMove(game.board, this.MOVE_VALUE.RANDOM).index; 
    },

    getRandomMove: function(board, moveVal) {
        var randomIndex,
            count = 0;

        while (!board.isEmpty(randomIndex)) {
            count++;
            randomIndex = Math.floor(Math.random() * board.N * board.N);
        }

        return new Move(randomIndex, moveVal);
    }

};
