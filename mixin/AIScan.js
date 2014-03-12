/* AIScan
 * --------------------------------------------------------------- */

var AIScan = {

    get_move: function(game) {
        var suggestedMoves = [];
        suggestedMoves.push( this.get_winning_move(game.board, game.magic, this.MOVE_VALUE.WIN) );
        suggestedMoves.push( this.get_blocking_move(game.board, game.magic, this.MOVE_VALUE.BLOCK_WIN) );
        suggestedMoves.push( this.get_random_move(game.board, this.MOVE_VALUE.RANDOM) );
        return this.analyze_move(suggestedMoves).num;
    },

    analyze_move: function(moves) {
        var i = 0,
            finalMove = new Move(undefined, -1),
            move;

        for (; i < moves.length; i++) {
            move = moves[i];
            if (move && move.num && move.val > finalMove.val) {
                finalMove = move;
            }
        };

        return finalMove;
    },

    get_winning_move: function(board, magic, moveVal) {
        var suggestedMove;
        magic.each(function(obj, i) {
            if (obj.n === -1 * (board.N - 1)) {
                suggestedMove = new Move('_' + (magic.SUM + obj.v), moveVal);
            }
        });
        return suggestedMove;
    },
    
    get_blocking_move: function(board, magic, moveVal) {
        var suggestedMove;
        magic.each(function(obj, i) {
            if (obj.n === board.N - 1) {
                suggestedMove = new Move('_' + (magic.SUM - obj.v), moveVal);
            }
        });
        return suggestedMove;
    },
    
    // m = 2
    // n = 0 => 2
    // n = 1 => 1
    // n = 2 => 0
    flip: function(m, n) {
        return m - n;
    }

};


