/* AILookahead
 * --------------------------------------------------------------- */

AILookahead = {

    getMove: function(game) {
        var suggestedMoves = [];
        suggestedMoves.push( this.getWinningMove(game.board, game.scores, this.MOVE_VALUE.WIN) );
        suggestedMoves.push( this.getBlockingMove(game.board, game.scores, this.MOVE_VALUE.BLOCK_WIN) );
        suggestedMoves.push( this.getRandomMove(game.board, this.MOVE_VALUE.RANDOM) );
        suggestedMoves.push( this.getBlockingForkMove(game.board, game.scores, this.MOVE_VALUE.BLOCK_FORK) );
        return this.analyzeMove(suggestedMoves).pt;

    },

    analyzeMove: function(moves) {
        var i = 0,
            finalMove = new Move(undefined, -1),
            move;
        for (; i < moves.length; i++) {
            move = moves[i];
            if (move && move.pt && move.val > finalMove.val) {
                finalMove = move;
            }
        };
        return finalMove;
    },

    getBlockingForkMove: function(board, scores) {
        console.log('block fork');
        
        board.each(function(val, pt) {
            scores.willWin(pt, 1);
            /*if (val === 0) {
                console.log('square is empty');
                console.log(pt);
                // create a scores class and see what it tells us?
            }*/
        });
        //console.log(scores.lookahead(new Point(0,0), 1));
    }

};
