/* AIScan
 * --------------------------------------------------------------- */

var AIScan = {

    win: function(board, score) {
        var idx, move;
        score.each(function(obj, i) {
            if (score.is_win(obj, XO.ai.VAL)) {
                idx = board.get(undefined, score.M + obj.magic);
                move = new Move(idx);
                Log.whisper('Can win on ' + idx);
            }
        });
        return move;
    },
    
    block_win: function(board, score) {
        var idx, move;
        score.each(function(obj, i) {
            if (score.is_win(obj, XO.human.VAL)) {
                idx = board.get(undefined, score.M - obj.magic);
                move = new Move(idx);
                Log.whisper('Opponent can win on ' + idx);
            }

        });
        return move;
    },

    empty_center: function(board) {
        return this.empty_square_by_type(board, 'center');
    },

    opposite_corner: function(board) {
        console.log('opposite corners');
        var corners = board.get_square_type('corner');
        board.each(function(obj, i) {
            if (obj.piece === XO.human.team) {
                console.log(obj);
            }
        });

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
            moves = [];
       
        for (; i < len; i++) {
            squareIdx = squareIdxs[i];
            if (board.is_empty_idx(squareIdx)) {
                moves.push(new Move(squareIdx));
            }
        }

        return moves[Math.floor(Math.random() * moves.length)];
    }

};
