/* AILookahead
 * --------------------------------------------------------------- */

AILookahead = {

    find_forks: function(board, score, side) {
        var forks = [];

        board.each_empty(function(obj, idx) {
            var winCount = 0,
                scoreClone = new Score(board);
            
            scoreClone.update(idx, side);
            scoreClone.each(function(scoreObj) {
                if (scoreClone.is_win(scoreObj, side)) {
                    winCount++;
                }
            });
            if (winCount > 1) {
                forks.push(new Move(idx));
            }
        });

        return forks;
    },

    fork: function(board, score) {
        // TODO: Stop baking this value in.
        return this.find_forks(board, score, -1)[0];
    },

    block_fork: function(board, score) {
        var forks = this.find_forks(board, score, 1);

        if (forks.length > 1) {

            Log.whisper('The human can fork you on ');
            console.log(forks);

            var forces = [];
            board.each_empty(function(obj, idx) {
                var scoreClone = new Score(board);
                scoreClone.update(idx, -1);

                scoreClone.each(function(scoreObj) {
                    if (scoreClone.is_win(scoreObj, -1)) {
                        forces.push(new Move(idx));
                    }
                });
            });

            for (var x = 0; x < forces.length; x++) {
                var scoreClone = new Score(board);

                scoreClone.update(forces[x].idx, -1);
                scoreClone.each(function(scoreObj, i) {
                    if (scoreClone.is_win(scoreObj, -1)) {
                        var magic = 15 + scoreObj.magic;
                        var response =  board.get(undefined, magic);

                        for (var g = 0; g < forks.length; g++) {
                            if (response === forks[g].idx) {
                                forces[x] = undefined; // Kill this move.
                            }
                        }
                    }
                });
            }

            var finalMoves = [];
            for (var w = 0; w < forces.length; w++) {
                if (forces[w] !== undefined) {
                    finalMoves.push(forces[w]);
                }
            }
        }

        if (finalMoves) {
            var pickAFuckingMove = finalMoves[Math.floor(Math.random() * finalMoves.length)];
            console.log('pick a fucking move');
            console.log(pickAFuckingMove);
            return pickAFuckingMove;
        }
    }
};
