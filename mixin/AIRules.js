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
            Log.note('Play center');
            return move;
        }
        
        // TODO: opposite corner: 6
        
        move = this.empty_corner(board);
        if (this.is_valid(move)) {
            Log.note('Play a corner');
            return move;
        }
        
        // TODO: empty side: 8

        move = this.random(board);
        if (this.is_valid(move)) {
            Log.note('Play a square randomly');
            return move;
        }
    },

    is_valid: function(move) {
        if (move && typeof move.idx === 'number') {
            return true;
        }
        return false;
    }

};
