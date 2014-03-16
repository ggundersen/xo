/* AILookahead
 * --------------------------------------------------------------- */

AILookahead = {

    fork: function(board, score) {
        return this.get_forks(board, score, XO.AI_VAL)[0];
    },

    block_fork: function(board, score) {
        var move, moves, forces,
            forks = this.get_forks(board, score, XO.HUMAN_VAL);

        if (forks.length > 1) {
            Log.whisper('Can be forked on multiple squares: ' + Log.to_string(forks, 'idx'));
            forces = this.get_forces(board, score);
            Log.whisper('Forcing moves are ' + Log.to_string(forces, 'idx'));

            Log.whisper('Filter moves in which opponent can block and fork');
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

            moves = this.filter_undefined(forces);
            Log.whisper('Filtered forcing moves are ' + Log.to_string(moves, 'idx'));
        }

        if (moves) {
            return moves[Math.floor(Math.random() * moves.length)];
        }
    },
    
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

    filter_undefined: function(obj) {
        var result = [],
            i = 0,
            len = obj.length;

        for (; i < len; i++) {
            if (obj[i] !== undefined) {
                result.push(obj[i]);
            }
        }
        return result;
    }

};
