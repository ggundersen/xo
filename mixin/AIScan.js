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
        return this.analyze_move(suggestedMoves).idx;
    },

    win: function(board, score, moveVal) {
        var suggestedIdx, suggestedMove;
        score.each(function(obj, i) {
            // TODO: Stop baking in the AI's value as a number
            // literal.
            if (score.is_win(obj, -1)) {
                suggestedIdx = board.get(undefined, score.MAGIC_SUM + obj.magic);
                suggestedMove = new Move(suggestedIdx, moveVal);
            }
        });
        return suggestedMove;
    },
    
    block: function(board, score, moveVal) {
        var suggestedIdx, suggestedMove;
        score.each(function(obj, i) {
            if (score.is_win(obj, 1)) {
                suggestedIdx = board.get(undefined, score.MAGIC_SUM - obj.magic);
                suggestedMove = new Move(suggestedIdx, moveVal);
            }

        });
        return suggestedMove;
    },

    empty_center: function(board, moveVal) {
        if (board.is_empty(4)) {
            return new Move(4, moveVal);
        }
    },

    opposite_corner: function(board, moveVal) {
    },

    empty_corner: function(board, moveVal) {
    },

    empty_side: function(board, moveVal) {
    }

};
