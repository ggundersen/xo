/* AIBehaviorScan
 * --------------------------------------------------------------- */

AIBehaviorLookahead = {

    getMove: function(game) {
        var suggestedMoves = [];
        suggestedMoves.push( this.win(game.board, game.score, this.MOVE_VALUE.WIN) );
        suggestedMoves.push( this.blockWin(game.board, game.score, this.MOVE_VALUE.BLOCK_WIN) );
        suggestedMoves.push( this.buildRow(game.board, game.score, this.MOVE_VALUE.BUILD_ROW) );
        //suggestedMoves.push( this.blockFork(game.board, this.MOVE_VALUE.BLOCK_FORK) );
        suggestedMoves.push( this.getRandomMove(game.board, this.MOVE_VALUE.RANDOM) );
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

    buildRow: function(board, score, moveVal) {
        //console.log(this);
        //console.log(board.state);
        console.log( this.xIsEmpty(board, 0) );
        //var suggestedMove;

        //suggestedMove = new Move(this.searchXorY(board, i, undefined), moveVal);

        //_.each(board.state, function(pt) {
        //    console.log(pt);
        //})

        //return suggestedMove;
    },

    blockFork: function(board) {
        console.log('block fork');
        // TODO: find the mathematical formula to get the corner squares
        // from the state array.
        var topLeft = board.get(new Point(0, 0)),
            topRight = board.get(new Point(board.N-1, 0)),
            bottomLeft = board.get(new Point(0, board.N-1)) ,
            bottomRight = board.get(new Point(board.N-1, board.N-1));

        if (
            topLeft === this.human ||
            topRight === this.human ||
            bottomLeft === this.human ||
            bottomRight === this.human
        ) {
            console.log('corner was played');
        }
    },

    // Helpers
    xIsEmpty: function(board, x) {
        for (var i = 0; i < board.N; i++) {
            if (board.state[x + (board.N * i)] !== 0) {
                return false;
            }
        }
        return true;
    }
};
