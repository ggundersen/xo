/* AILookahead
 * --------------------------------------------------------------- */

AILookahead = {

    fork: function(board, score, moveVal) {
        var i, len, count, testScore, suggestedMove;

        board.each(function(obj, idx) {
            count = 0;
            if (board.is_empty(idx)) {
                testScore = score.test_update(idx, -1);
                for (i = 0, len = testScore.length; i < len; i++) {
                    if (testScore[i].count === -2) {
                        count++;
                    }
                }
                if (count === 2) {
                    suggestedMove = new Move(idx, moveVal);
                }
            }
        });

        return suggestedMove;
    },

    block_fork: function(board, score, moveVal) {
        var i, len, count, testScore, suggestedMove,
            forkingMoves = [],
            candidates = [];

        board.each(function(obj, idx) {
            count = 0;
            if (board.is_empty(idx)) {
                testScore = score.test_update(idx, 1);
                for (i = 0, len = testScore.length; i < len; i++) {
                    if (testScore[i].count === 2) {
                        count++;
                    }
                }
                if (count === 2) {
                     forkingMoves.push(new Move(idx, moveVal));
                }
            }
        });

        if (forkingMoves.length > 1) {
            board.each(function(obj, idx) {
                if (board.is_empty(idx) && idx !== forkingMoves[0].idx && idx !== forkingMoves[1].idx) {
                    candidates.push(new Move(idx, moveVal));
                }
            });
        }

        console.log(candidates);

        return candidates[Math.floor(Math.random() * candidates.length)];
    }

};
