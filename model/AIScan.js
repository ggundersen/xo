/* AIScan
 * --------------------------------------------------------------- */

var AIScan = function(val) {
    this.val = val;
};

_.extend(AIScan.prototype, AIBehaviorAbstract, AIBehaviorRandom, AIBehaviorScan);

AIScan.prototype.getMove = function(game) {
    var suggestedMoves = [];
    suggestedMoves.push( this.win(game.board, game.score, this.MOVE_VALUE.WIN) );
    suggestedMoves.push( this.blockWin(game.board, game.score, this.MOVE_VALUE.BLOCK_WIN) );
    suggestedMoves.push( this.getRandomMove(game.board, this.MOVE_VALUE.RANDOM) );
    return this.analyzeMove(suggestedMoves).pt;
};

// `analyze` takes an array of possible moves and returns the one
// with the highest value. This seems like one way of building an AI,
// namely returning the best move--given a set of proposed moves--
// from a set of moves. Another way would be for the computer to have
// a goal and to find a way of achieving it.
AIScan.prototype.analyzeMove = function(moves) {
    var i = 0,
        finalMove = new Move(undefined, -1),
        move;
    for (; i < moves.length; i++) {
        move = moves[i];
        if (move && move.pt && move.val > finalMove.val) {
            finalMove = move;
        }
    };
    return finalMove;
};
