/* AILookahead
 * --------------------------------------------------------------- */

AILookahead = {

    get_move: function(game) {
        var suggestedMoves = [];
        //suggestedMoves.push( this.get_winning_move(game.board, game.magic, this.MOVE_VALUE.WIN) );
        //suggestedMoves.push( this.get_blocking_move(game.board, game.magic, this.MOVE_VALUE.BLOCK_WIN) );
        suggestedMoves.push( this.get_random_move(game.board, this.MOVE_VALUE.RANDOM) );
        suggestedMoves.push( this.play_center(game) );
        suggestedMoves.push( this.get_fork_blocking_move(game, game.board, game.magic, this.MOVE_VALUE.BLOCK_FORK) );
        return this.analyze_move(suggestedMoves).num;
    },
    
    get_fork_blocking_move: function(game, board, magic, moveVal) {
        if (game.turn === 1) { return; }
        console.log('block fork');
        
        board.each(function(num) {
            if (board.is_empty(num)) {
                var testScore = magic.test(num);
                console.log(testScore);
                for (var i = 0; i < testScore.length; i++) {
                    if (testScore[i].n === 2 && testScore[i].v === 15) {
                        console.log('this move will win');
                        console.log(testState[i]);
                    }
                }
            }
        });
    },

    play_center: function(game) {
        // brute force play in the middle
        if (game.turn === 1) {
            return new Move('_5', 4); 

        }
    }
};
