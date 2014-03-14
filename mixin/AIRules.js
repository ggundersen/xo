/* AIRules
 *
 * There are different ways of analyzing *which* move to select.
 * Eventually, this could be configured with a probability of
 * selecting the correct rule.
 * --------------------------------------------------------------- */

// TODO: Rules should not be ranked and then passed to
// `analyze_move`. `analyze_move` should have an enumeration of the
// move types and rank or ignore that rank accordingly.
var AIRules = {
    
    analyze_move: function(moves) {
        var i = 0,
            finalMove = new Move(undefined, 999),
            move;

        for (; i < moves.length; i++) {
            move = moves[i];
            if (move && move.num && move.val < finalMove.val) {
                finalMove = move;
            }
        };

        return finalMove;
    }

};


