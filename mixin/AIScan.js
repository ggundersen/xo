/* AIScan
 * --------------------------------------------------------------- */

var AIScan = {

    win: function(board, score) {
        var suggestedIdx, suggestedMove;
        score.each(function(obj, i) {
            // TODO: Stop baking in the AI's value as a number
            // literal.
            if (score.is_win(obj, -1)) {
                suggestedIdx = board.get(undefined, score.M + obj.magic);
                suggestedMove = new Move(suggestedIdx);
            }
        });
        return suggestedMove;
    },
    
    block_win: function(board, score) {
        var suggestedIdx, suggestedMove;
        score.each(function(obj, i) {
            if (score.is_win(obj, 1)) {
                suggestedIdx = board.get(undefined, score.M - obj.magic);
                suggestedMove = new Move(suggestedIdx);
            }

        });
        return suggestedMove;
    },

    empty_center: function(board) {
        return this.empty_square_by_type(board, 'center');
    },

    // TODO !!
    opposite_corner: function(board) {
    },

    empty_corner: function(board) {
        return this.empty_square_by_type(board, 'corner');
    },

    empty_side: function(board) {
        return this.empty_square_by_type(board, 'side');
    },

    empty_square_by_type: function(board, type) {
        var squareIdx,
            squareIdxs = board.get_square_type(type),
            i = 0,
            len = squareIdxs.length,
            candidates = [];
       
        for (; i < len; i++) {
            squareIdx = squareIdxs[i];
            if (board.is_empty(squareIdx)) {
                candidates.push(new Move(squareIdx));
            }
        }

        return candidates[Math.floor(Math.random() * candidates.length)];
    }

};
