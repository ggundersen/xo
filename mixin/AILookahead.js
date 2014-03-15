/* AILookahead
 * --------------------------------------------------------------- */

AILookahead = {

    fork: function(board, score) {
        console.log('Looking to fork opponent.');

        var forks = [],
            self = this;

        board.each_empty(function(obj, idx) {
            var winCount = 0,
                scoreClone = new Score(board);
            
            scoreClone.update(idx, -1);
            scoreClone.each(function(scoreObj) {
                if (scoreClone.is_win(scoreObj, -1)) {
                    winCount++;
                }
            });

            if (winCount > 1) {
                forks.push(new Move(idx));
            }
        });

        console.log(forks);
        return forks[0];
    },

    block_fork: function(board, score) {
        /*var i, len, count, testScore,
            self = this,
            forks = [],
            candidates = [];

        board.each_empty(function(obj, idx) {
            var fork = self.get_fork(idx, score, 1);
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
                    candidates.push(new Move(idx));
                }
            });
        }

        return candidates[Math.floor(Math.random() * candidates.length)];*/
    }
};
