/* AILookahead
 *
 * AILookahead scans the *current* and future states of the board to
 * make the best decision.
 * --------------------------------------------------------------- */

var AILookahead = function(val) {
    // TODO: Don't bake this in.
    this.human = 'X';
    this.val = val;
};

AILookahead.prototype = Object.create(AIAbstract.prototype);

AILookahead.prototype.getMove = function(game) {};

AILookahead.prototype.analyzeMove = function(moves) {};

AILookahead.prototype.blockFork = function(board) {
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

};


