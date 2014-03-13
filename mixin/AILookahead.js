/* AILookahead
 * --------------------------------------------------------------- */

AILookahead = {

    get_move: function(game) {
        var suggestedMoves = [];
        suggestedMoves.push( this.get_winning_move(game.board, game.magic, this.MOVE_VALUE.WIN) );
        suggestedMoves.push( this.get_blocking_move(game.board, game.magic, this.MOVE_VALUE.BLOCK_WIN) );
        suggestedMoves.push( this.get_random_move(game.board, this.MOVE_VALUE.RANDOM) );
        suggestedMoves.push( this.get_blocking_fork_move(game.board, game.magic, this.MOVE_VALUE.BLOCK_FORK) );
        return this.analyze_move(suggestedMoves).num;
    },
    
    get_blocking_fork_move: function(board, magic) {
        console.log('block fork');
        
        board.each(function(num) {
            if (board.is_empty(num)) {
                var testState = magic.test(num);
                console.log(testState);
            }
        });
    }

};
