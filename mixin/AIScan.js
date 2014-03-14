/* AIScan
 * --------------------------------------------------------------- */

var AIScan = {

    get_move: function(game) {
        var suggestedMoves = [];
        suggestedMoves.push(this.win(game.board, game.magic, this.MOVE_VALUE.WIN));
        suggestedMoves.push(this.block(game.board, game.magic, this.MOVE_VALUE.BLOCK_WIN));
        suggestedMoves.push(this.center(game.board, this.MOVE_VALUE.RANDOM));
        suggestedMoves.push(this.random(game.board, this.MOVE_VALUE.RANDOM));

        // `analyze_move` is defined by a separate mixin, which
        // handles how a move out of the available moves is
        // selected.
        return this.analyze_move(suggestedMoves).num;
    },

    win: function(board, magic, moveVal) {
        var suggestedMove;
        magic.each(function(obj, i) {
            if (obj.n === -1 * (board.N - 1)) {
                suggestedMove = new Move('_' + (magic.SUM + obj.v), moveVal);
            }
        });
        return suggestedMove;
    },
    
    block: function(board, magic, moveVal) {
        var suggestedMove;
        magic.each(function(obj, i) {
            if (obj.n === board.N - 1) {
                suggestedMove = new Move('_' + (magic.SUM - obj.v), moveVal);
            }
        });
        return suggestedMove;
    },

    center: function(board, moveVal) {
        if (board.is_empty('_5')) {
            console.log('center square is empty');
            return new Move('_5', moveVal);
        }
    }

};
