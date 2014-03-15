/* AIRules
 *
 * There are different ways of analyzing *which* move to select.
 * Eventually, this could be configured with a probability of
 * selecting the correct rule.
 * --------------------------------------------------------------- */

var AIRules = {
  
    // http://en.wikipedia.org/wiki/Tic-tac-toe#Strategy
    get_move: function(board, score) {
        var suggestedMoves = [];
        suggestedMoves.push(this.win(board, score, 1));
        suggestedMoves.push(this.block_win(board, score, 2));
        suggestedMoves.push(this.fork(board, score, 3));
        suggestedMoves.push(this.block_fork(board, score, 4));
        suggestedMoves.push(this.empty_center(board, 5));
        // opposite corner: 6
        suggestedMoves.push(this.empty_corner(board, 7));
        // empty side: 8
        suggestedMoves.push(this.random(board, 9));
        return this.analyze_move(suggestedMoves).idx;
    },

    analyze_move: function(moves) {
        var i = 0,
            finalMove = new Move(undefined, 999),
            move;

        for (; i < moves.length; i++) {
            move = moves[i];
            if (move &&
                typeof move.idx === 'number' &&
                move.val < finalMove.val
            ) {
                finalMove = move;
            }
        };

        return finalMove;
    }

};


