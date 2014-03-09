/* AIBehaviorRandom
 * --------------------------------------------------------------- */

var AIBehaviorRandom = {
    
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
