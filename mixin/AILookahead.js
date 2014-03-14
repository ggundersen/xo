/* AILookahead
 * --------------------------------------------------------------- */

AILookahead = {

    get_move: function(game) {
        var suggestedMoves = [];
        suggestedMoves.push(this.win(game.board, game.magic, this.MOVE_VALUE.WIN));
        suggestedMoves.push(this.block(game.board, game.magic, this.MOVE_VALUE.BLOCK_WIN));
        suggestedMoves.push(this.fork(game, game.board, game.magic, this.MOVE_VALUE.FORK));
        suggestedMoves.push(this.center(game.board, this.MOVE_VALUE.RANDOM));
        suggestedMoves.push(this.random(game.board, this.MOVE_VALUE.RANDOM));
        return this.analyze_move(suggestedMoves).num;
    },

    fork: function(game, board, magic, moveVal) {
        var suggestedMove;

        board.each(function(obj, num) {
            var count = 0;
            if (board.is_empty(num)) {
                var testState = magic.test(num);
                for (var i = 0, len = testState.length; i < len; i++) {
                    var testObj = testState[i];
                    if (testObj.n === -2) {
                        count++;
                    }
                }
                if (count === 2) {
                    console.log('Possible AI fork:');
                    console.log(num);
                    suggestedMove = new Move(num, moveVal);
                }


            }
        });

        return suggestedMove;
    }

};
