/* AIScan
 * --------------------------------------------------------------- */

var AIScan = {

    get_move: function(game) {
        var suggestedMoves = [];
        suggestedMoves.push(this.win(game.board, game.score, this.MOVE_VALUE.WIN));
        suggestedMoves.push(this.block(game.board, game.score, this.MOVE_VALUE.BLOCK_WIN));
        suggestedMoves.push(this.empty_center(game.board, this.MOVE_VALUE.RANDOM));
        suggestedMoves.push(this.random(game.board, this.MOVE_VALUE.RANDOM));

        // `analyze_move` is defined by a separate mixin, which
        // handles how a move out of the available moves is
        // selected.
        return this.analyze_move(suggestedMoves).num;
    },

    win: function(board, score, moveVal) {
        var suggestedMove;
        score.each(function(obj, i) {
            if (obj.n === -1 * (board.N - 1)) {
                suggestedMove = new Move('_' + (score.SUM + obj.v), moveVal);
            }
        });
        return suggestedMove;
    },
    
    block: function(board, score, moveVal) {
        var suggestedMove;
        score.each(function(obj, i) {
            if (obj.n === board.N - 1) {
                suggestedMove = new Move('_' + (score.SUM - obj.v), moveVal);
            }
        });
        return suggestedMove;
    },

    empty_center: function(board, moveVal) {
        if (board.is_empty('_5')) {
            return new Move('_5', moveVal);
        }
    },

    opposite_corner: function(board, moveVal) {
    },

    empty_corner: function(board, moveVal) {
    },

    empty_side: function(board, moveVal) {
    }

};
