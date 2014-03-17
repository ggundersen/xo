/* AIRules
 *
 * http://en.wikipedia.org/wiki/Tic-tac-toe#Strategy
 * --------------------------------------------------------------- */

var AIRules = {
  
    // This is brute-force-y but that seems like the most
    // straightforward way to lazily evaluate.
    get_move: function(board, score) {
        var move;

        Log.clear();
        
        move = this.first_move(board, score);
        if (this.is_valid(move)) {
            Log.note('First move. Play a center or corner.');
            return move;
        }

        move = this.win(board, score);
        if (this.is_valid(move)) {
            Log.note('Go for the win');
            return move;
        }

        move = this.block_win(board, score);
        if (this.is_valid(move)) {
            Log.note('Block a winning move');
            return move;
        }

        move = this.fork(board, score);
        if (this.is_valid(move)) {
            Log.note('Fork the opponent');
            return move;
        }

        move = this.block_fork(board, score);
        if (this.is_valid(move)) {
            Log.note('Block potential fork');
            return move;
        }

        move = this.empty_center(board);
        if (this.is_valid(move)) {
            Log.note('Play open center');
            return move;
        }
       
        move = this.opposite_corner(board);
        if (this.is_valid(move)) {
            Log.note('Play opposite corner');
            return move;
        }

        move = this.empty_corner(board);
        if (this.is_valid(move)) {
            Log.note('Play open corner');
            return move;
        }
        
        move = this.random(board);
        if (this.is_valid(move)) {
            Log.note('Play random square');
            return move;
        }
    },

    is_valid: function(move) {
        if (move && typeof move.idx === 'number') {
            return true;
        }
        return false;
    },

    first_move: function(board) {
        if (board.is_empty()) {
            if (Math.random() < .2) {
                return this.empty_center(board);
            } else {
                return this.empty_corner(board);
            }
        }
    }

};
