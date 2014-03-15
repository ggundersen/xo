/* AILookahead
 * --------------------------------------------------------------- */

AILookahead = {

    get_fork: function(idx, score, moveVal, side) {
        var i, len,
            winCount = 0,
            testScore = score.test_update(idx, side);
        for (i = 0, len = testScore.length; i < len; i++) {
            if (testScore[i].count === 2 * side) {
                winCount++;
            }
        }
        if (winCount === 2) {
            return new Move(idx, moveVal);
        }
    },

    fork: function(board, score, moveVal) {
        var i, len, count, testScore,
            forks = [],
            self = this;

        board.each_empty(function(obj, idx) {
            // `fork` must be re-instantiated every time, so its
            // truthy-ness can be checked.
            var fork = self.get_fork(idx, score, moveVal, -1);
            if (fork) {
                forks.push(fork);
            }
        });

        // Return one move that will fork
        return forks[Math.floor(Math.random() * forks.length)];
    },

    block_fork: function(board, score, moveVal) {
        var i, len, count, testScore,
            self = this,
            forks = [],
            candidates = [];

        board.each_empty(function(obj, idx) {
            var fork = self.get_fork(idx, score, moveVal, 1);
            if (fork) {
                forks.push(fork);
            }
        });

        // TODO: This does not prevent the human from blocking *and*
        // forking at the same time.
        if (forks.length > 1) {
            board.each_empty(function(obj, idx) {
                testScore = score.test_update(idx, 1);
                for (i = 0, len = testScore.length; i < len; i++) {
                    if (testScore[i].count === 2) {
                        count++;
                    }
                }
                if (idx !== forks[0].idx && idx !== forks[1].idx) {
                    candidates.push(new Move(idx, moveVal));
                }
            });
        }

        return candidates[Math.floor(Math.random() * candidates.length)];
    }
};
