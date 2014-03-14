/* AIRules
 *
 * There are different ways of analyzing *which* move to select.
 * Eventually, this could be configured with a probability of
 * selecting the correct rule.
 *
 * http://programmers.stackexchange.com/a/228680/115607
 *
 * The critical observation made by Mario is that an FP approach to
 * this problem is to have the AI consume a board board--not
 * necessarily even the current one--and return a suggested move.
 *
 * Consider an alternative, where the AI manipulates (i.e. makes the
 * move) the board's board itself. Then you would have mutation at
 * multiple points in the program.
 * --------------------------------------------------------------- */

// TODO: Rules should not be ranked and then passed to
// `analyze_move`. `analyze_move` should have an enumeration of the
// move types and rank or ignore that rank accordingly.
var AIRules = {
  
    // http://en.wikipedia.org/wiki/Tic-tac-toe#Strategy
    MOVE_VALUE: {
        'WIN': 1,
        'BLOCK_WIN': 2,
        'FORK': 3,
        'BLOCK_FORK': 4,
        'EMPTY_CENTER': 5,
        'OPPOSITE_CORNER': 6,
        'EMPTY_CORNER': 7,
        'EMPTY_SIDE': 8,
        'RANDOM': 9
    },

    get_move: function(board, score) {

        console.log(this);

        var suggestedMoves = [];
        suggestedMoves.push(this.win(board, score, this.MOVE_VALUE.WIN));
        suggestedMoves.push(this.block_win(board, score, this.MOVE_VALUE.BLOCK_WIN));
        suggestedMoves.push(this.fork(board, score, this.MOVE_VALUE.FORK));
        suggestedMoves.push(this.block_fork(board, score, this.MOVE_VALUE.BLOCK_FORK));
        suggestedMoves.push(this.empty_center(board, this.MOVE_VALUE.EMPTY_CENTER));
        suggestedMoves.push(this.empty_corner(board, this.MOVE_VALUE.EMPTY_CORNER));
        suggestedMoves.push(this.random(board, this.MOVE_VALUE.RANDOM));
        return this.analyze_move(suggestedMoves).idx;
    },

    // TODO: This should be a switch statement between all the
    // possible moves by value. The values of the moves should be
    // kept in this mixin.
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


