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
            return move;
        } else {
            Log.whisper('No winning move');
        }
    
        move = this.block_win(board, score);
        if (this.is_valid(move)) {
            return move;
        } else {
            Log.whisper('No need to block');
        }

        move = this.fork(board, score);
        if (this.is_valid(move)) {
            return move;
        } else {
            Log.whisper('No forking move');
        }

        move = this.block_fork(board, score);
        if (this.is_valid(move)) {
            return move;
        } else {
            Log.whisper('No fork to block');
        }

        move = this.empty_center(board);
        if (this.is_valid(move)) {
            Log.note('Play center');
            return move;
        } else {
            Log.whisper('The center is not empty');
        }
        
        // opposite corner: 6
        
        move = this.empty_corner(board);
        if (this.is_valid(move)) {
            return move;
        } else {
            Log.whisper('The corners are not empty');
        }
        
        // empty side: 8

        move = this.random(board);
        if (this.is_valid(move)) {
            return move;
        } else {
            Log.error('No move was made');
        }
    },

    is_valid: function(move) {
        if (move && typeof move.idx === 'number') {
            return true;
        }
        return false;
    }

};
