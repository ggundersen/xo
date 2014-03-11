/* AIBehaviorRandom
 * --------------------------------------------------------------- */

var AIBehaviorRandom = {
  
    // `getMove` is a little complicated--getting a Move instance and
    // then returning only its index--because it is used with other
    // behaviors and needs to be compatible.
    getMove: function(game) {
        return this.getRandomMove(game.board, this.MOVE_VALUE.RANDOM).pt; 
    },

    getRandomMove: function(board, moveVal) {
        var randomPt;

        do {
            randomPt = new Point(
                Math.floor(Math.random() * board.N),
                Math.floor(Math.random() * board.N)
            );
        } while (!board.isEmpty(randomPt));

        return new Move(randomPt, moveVal);
    }

};
