/* AILookahead
 * --------------------------------------------------------------- */

AILookahead = {

    getMove: function(game) {
        var suggestedMoves = [];
        suggestedMoves.push( this.getWinningMove(game.board, game.magic, this.MOVE_VALUE.WIN) );
        suggestedMoves.push( this.getBlockingMove(game.board, game.magic, this.MOVE_VALUE.BLOCK_WIN) );
        suggestedMoves.push( this.getRandomMove(game.board, this.MOVE_VALUE.RANDOM) );
        suggestedMoves.push( this.getBlockingForkMove(game.board, game.magic, this.MOVE_VALUE.BLOCK_FORK) );
        return this.analyzeMove(suggestedMoves).pt;
    },
    
    getBlockingForkMove: function(board, magic) {
        console.log('block fork');
        
        board.each(function(val, pt) {
            magic.willWin(pt, 1);
            /*if (val === 0) {
                console.log('square is empty');
                console.log(pt);
                // create a magic class and see what it tells us?
            }*/
        });
        //console.log(magic.lookahead(new Point(0,0), 1));
    }

};
