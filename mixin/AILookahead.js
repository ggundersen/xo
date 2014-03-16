/* AILookahead
 * --------------------------------------------------------------- */

AILookahead = {

    get_forks: function(board, score, sideVal) {
        var forks = [];

        board.each_empty(function(obj, idx) {
            var winCount = 0,
                scoreClone = new Score(board);
            
            scoreClone.update(idx, sideVal);
            scoreClone.each(function(scoreObj) {
                if (scoreClone.is_win(scoreObj, sideVal)) {
                    winCount++;
                }
            });
            if (winCount > 1) {
                forks.push(new Move(idx));
            }
        });

        return forks;
    },

    get_forces: function(board, score) {
        var forces = [];
        board.each_empty(function(obj, idx) {
            var scoreClone = new Score(board);
            scoreClone.update(idx, XO.AI_VAL);
            scoreClone.each(function(scoreObj) {
                if (scoreClone.is_win(scoreObj, XO.AI_VAL)) {
                    forces.push(new Move(idx));
                }
            });
        });
        return forces;
    },

    fork: function(board, score) {
        return this.get_forks(board, score, XO.AI_VAL)[0];
    },

    block_fork: function(board, score) {
        var forces,
            forks = this.get_forks(board, score, XO.HUMAN_VAL);

        if (forks.length > 1) {
            Log.whisper('Can be forked on multiple squares: ' + Log.to_string(forks, 'idx'));
            Log.whisper('Look for forcing moves.')

            forces = this.get_forces(board, score);

            Log.whisper('Potential forcing moves are ' + Log.to_string(forces, 'idx'));

            for (var x = 0; x < forces.length; x++) {
                var scoreClone = new Score(board);

                scoreClone.update(forces[x].idx, XO.AI_VAL);
                scoreClone.each(function(scoreObj, i) {
                    if (scoreClone.is_win(scoreObj, XO.AI_VAL)) {
                        var magic = board.M + scoreObj.magic;
                        var response =  board.get(undefined, magic);

                        for (var g = 0; g < forks.length; g++) {
                            if (response === forks[g].idx) {
                                forces[x] = undefined;
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
