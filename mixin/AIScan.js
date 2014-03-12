/* AIScan
 * --------------------------------------------------------------- */

var AIScan = {

    get_move: function(game) {
        var suggestedMoves = [];
        suggestedMoves.push( this.get_winning_move(game.board, game.magic, this.MOVE_VALUE.WIN) );
        suggestedMoves.push( this.get_blocking_move(game.board, game.magic, this.MOVE_VALUE.BLOCK_WIN) );
        suggestedMoves.push( this.get_random_move(game.board, this.MOVE_VALUE.RANDOM) );

        // `analyze_move` is defined by a separate mixin, which
        // handles how a move out of the available moves is
        // selected.
        return this.analyze_move(suggestedMoves).num;
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
    }

};
