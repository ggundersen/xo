/* AIBehaviorRandom
 * --------------------------------------------------------------- */

var AIBehaviorRandom = {

    getMove: function(game) {
        return this.getRandomMove(game.board, this.MOVE_VALUE.RANDOM).pt; 
    },

    getRandomMove: function(board, moveVal) {
        var randomIndex,
            count = 0;

        while (board.state[randomIndex] !== 0) {
            count++;
            randomIndex = Math.floor(Math.random() * board.N * board.N);
        }

        return new Move(board.pt(randomIndex), moveVal);
    }

};
