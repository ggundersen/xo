/* AIRules
 *
 * There are different ways of analyzing *which* move to select.
 * Eventually, this could be configured with a probability of
 * selecting the correct rule.
 * --------------------------------------------------------------- */

var AIRules = {
    
    analyze_move: function(moves) {
        var i = 0,
            finalMove = new Move(undefined, -1),
            move;

        for (; i < moves.length; i++) {
            move = moves[i];
            if (move && move.num && move.val > finalMove.val) {
                finalMove = move;
            }
        };

        return finalMove;
    }

};


