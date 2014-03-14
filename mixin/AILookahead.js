/* AILookahead
 * --------------------------------------------------------------- */

AILookahead = {

    get_move: function(game) {
        var suggestedMoves = [];
        suggestedMoves.push(this.win(game.board, game.score, this.MOVE_VALUE.WIN));
        suggestedMoves.push(this.block(game.board, game.score, this.MOVE_VALUE.BLOCK_WIN));
        suggestedMoves.push(this.fork(game, game.board, game.score, this.MOVE_VALUE.FORK));
        suggestedMoves.push(this.block_fork(game, game.board, game.score, this.MOVE_VALUE.BLOCK_FORK));
        suggestedMoves.push(this.empty_center(game.board, this.MOVE_VALUE.RANDOM));
        suggestedMoves.push(this.random(game.board, this.MOVE_VALUE.RANDOM));
        return this.analyze_move(suggestedMoves).num;
    },

    fork: function(game, board, score, moveVal) {
        var suggestedMove;

        board.each(function(obj, num) {
            var count = 0;
            if (board.is_empty(num)) {
                var testState = score.test(num, -1);
                for (var i = 0, len = testState.length; i < len; i++) {
                    var testObj = testState[i];
                    if (testObj.n === -2) {
                        count++;
                    }
                }
                if (count === 2) {
                    suggestedMove = new Move(num, moveVal);
                }
            }
        });

        return suggestedMove;
    },

    block_fork: function(game, board, score, moveVal) {

        var suggestedMove,
            forkingMoves = [];

        board.each(function(obj, num) {
            if (board.is_empty(num)) {
                var win = 0;
                var testState = score.test(num, 1);
                for (var i = 0, len = testState.length; i < len; i++) {
                    var testObj = testState[i];
                    if (testObj.n === 2) {
                        win++;
                    }
                }
                if (win === 2) {
                    forkingMoves.push(new Move(num, moveVal));
                }
            }
        });

        if (forkingMoves.length > 1) {
            board.each(function(obj, num) {
                if (board.is_empty(num) && num !== forkingMoves[0].num && num !== forkingMoves[1].num) {
                    suggestedMove = new Move(num, moveVal);
                }
            });
        }

        return suggestedMove;
    }



};
