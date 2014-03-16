/* AILookahead
 * --------------------------------------------------------------- */

AILookahead = {

    fork: function(board, score, moveVal) {
        var forks = [];

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
                forks.push(new Move(idx, moveVal));
            }
        });

        return forks[0];
    },

    block_fork: function(board, score, moveVal) {
        var forks = [];

        board.each_empty(function(obj, idx) {
            var winCount = 0,
                scoreClone = new Score(board);
            
            scoreClone.update(idx, 1);
            scoreClone.each(function(scoreObj) {
                if (scoreClone.is_win(scoreObj, 1)) {
                    winCount++;
                }
            });
            if (winCount > 1) {
                forks.push(new Move(idx, moveVal));
            }
        });

        if (forks.length > 1) {
            Log.note('The human can fork you here:');
            //Log.note(forks.toString());

            var forces = [];
            board.each_empty(function(obj, idx) {
                var scoreClone = new Score(board);
                scoreClone.update(idx, -1);

                scoreClone.each(function(scoreObj) {
                    if (scoreClone.is_win(scoreObj, -1)) {
                        forces.push(new Move(idx, moveVal));
                    }
                });
            });

            //Log.note('You can force the human to respond here:');
            //Log.note(forces);

            for (var x = 0; x < forces.length; x++) {
                var scoreClone = new Score(board);

                scoreClone.update(forces[x].idx, -1);
                scoreClone.each(function(scoreObj, i) {
                    if (scoreClone.is_win(scoreObj, -1)) {
                        var magic = 15 + scoreObj.magic;
                        var response =  board.get(undefined, magic);

                        for (var g = 0; g < forks.length; g++) {
                            if (response === forks[g].idx) {
                                //console.log('If you play this idx: ' + forces[x].idx);
                                //console.log('The human will block and fork here: ' + forks[g].idx);
                                forces[x] = undefined; // Kill this move.
                            }
                        }
                        //console.log('The human will block here MAGIC: ' + board.get(undefined, magic));
                        //humansBestMoves.push(board.get(undefined, magic));
                        //forces[x] = undefined;
                    }
                });
            }

            //console.log(forces);
            var finalMoves = [];
            for (var w = 0; w < forces.length; w++) {
                if (forces[w] !== undefined) {
                    finalMoves.push(forces[w]);
                }
            }
        } // END OF IF FORK

        if (finalMoves) {
            var pickAFuckingMove = finalMoves[Math.floor(Math.random() * finalMoves.length)];
            console.log('pick a fucking move');
            console.log(pickAFuckingMove);
            return pickAFuckingMove;
        }
    }
};
