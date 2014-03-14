/* AILookahead
 * --------------------------------------------------------------- */

AILookahead = {

    get_move: function(game) {
        var suggestedMoves = [];
        suggestedMoves.push(this.win(game.board, game.score, this.MOVE_VALUE.WIN));
        suggestedMoves.push(this.block_win(game.board, game.score, this.MOVE_VALUE.BLOCK_WIN));
        suggestedMoves.push(this.fork(game, game.board, game.score, this.MOVE_VALUE.FORK));
        suggestedMoves.push(this.block_fork(game, game.board, game.score, this.MOVE_VALUE.BLOCK_FORK));
        suggestedMoves.push(this.empty_center(game.board, this.MOVE_VALUE.EMPTY_CENTER));
        suggestedMoves.push(this.empty_corner(game.board, this.MOVE_VALUE.EMPTY_CORNER));
        suggestedMoves.push(this.random(game.board, this.MOVE_VALUE.RANDOM));
        return this.analyze_move(suggestedMoves).idx;
    },

    fork: function(game, board, score, moveVal) {
        var i, len, count, testScore, suggestedMove;

        board.each(function(obj, idx) {
            count = 0;
            if (board.is_empty(idx)) {
                testScore = score.test_move(idx, -1);
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

    block_fork: function(game, board, score, moveVal) {
        var i, len, count, testScore, suggestedMove,
            forkingMoves = [];

        board.each(function(obj, idx) {
            count = 0;
            if (board.is_empty(idx)) {
                testScore = score.test_move(idx, 1);
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
                    suggestedMove = new Move(idx, moveVal);
                }
            });
        }

        return suggestedMove;
    }



};
