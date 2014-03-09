/* AIBehaviorScan
 * --------------------------------------------------------------- */

AIBehaviorLookahead = {

    buildRow: function(board, score, moveVal) {
       console.log('build row'); 
    },

    blockFork: function(board) {
        console.log('block fork');
        // TODO: find the mathematical formula to get the corner squares
        // from the state array.
        var topLeft = board.get(new Point(0, 0)),
            topRight = board.get(new Point(board.N-1, 0)),
            bottomLeft = board.get(new Point(0, board.N-1)) ,
            bottomRight = board.get(new Point(board.N-1, board.N-1));

        if (
            topLeft === this.human ||
            topRight === this.human ||
            bottomLeft === this.human ||
            bottomRight === this.human
        ) {
            console.log('corner was played');
        }
    }

};
