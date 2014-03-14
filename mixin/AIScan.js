/* AIScan
 * --------------------------------------------------------------- */

var AIScan = {

    get_move: function(board, score) {
        var suggestedMoves = [];
        suggestedMoves.push(this.win(board, score, this.MOVE_VALUE.WIN));
        suggestedMoves.push(this.block_win(board, score, this.MOVE_VALUE.BLOCK_WIN));
        suggestedMoves.push(this.empty_center(board, this.MOVE_VALUE.EMPTY_CENTER));
        suggestedMoves.push(this.empty_corner(board, this.MOVE_VALUE.EMPTY_CORNER));
        suggestedMoves.push(this.random(board, this.MOVE_VALUE.RANDOM));

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
                suggestedIdx = board.get(undefined, score.M + obj.magic);
                suggestedMove = new Move(suggestedIdx, moveVal);
            }
        });
        return suggestedMove;
    },
    
    block_win: function(board, score, moveVal) {
        var suggestedIdx, suggestedMove;
        score.each(function(obj, i) {
            if (score.is_win(obj, 1)) {
                suggestedIdx = board.get(undefined, score.M - obj.magic);
                suggestedMove = new Move(suggestedIdx, moveVal);
            }

        });
        return suggestedMove;
    },

    empty_center: function(board, moveVal) {
        return this.empty_square_by_type(board, moveVal, 'center');
    },

    // TODO !!
    opposite_corner: function(board, moveVal) {
    },

    empty_corner: function(board, moveVal) {
        return this.empty_square_by_type(board, moveVal, 'corner');
    },

    empty_side: function(board, moveVal) {
        return this.empty_square_by_type(board, moveVal, 'side');
    },

    empty_square_by_type: function(board, moveVal, type) {
        var squareIdx,
            squareIdxs = board.get_square_type(type),
            i = 0,
            len = squareIdxs.length;
       
        for (; i < len; i++) {
            squareIdx = squareIdxs[i];
            if (board.is_empty(squareIdx)) {
                return new Move(squareIdx, moveVal);
            }
        }    
    }

};
