/* AILookahead
 *
 * AILookahead scans the *current* and future states of the board to
 * make the best decision.
 * --------------------------------------------------------------- */

var AILookahead = function(val) {
    // TODO: Don't bake this in.
    this.human = 'X';
    this.val = val;
};

_.extend(AILookahead.prototype, AIBehaviorAbstract, AIBehaviorRandom, AIBehaviorScan, AIBehaviorLookahead);

AILookahead.prototype.getMove = function(game) {
    var suggestedMoves = [];
    suggestedMoves.push( this.win(game.board, game.score, this.MOVE_VALUE.WIN) );
    suggestedMoves.push( this.blockWin(game.board, game.score, this.MOVE_VALUE.BLOCK_WIN) );
    suggestedMoves.push( this.buildRow(game.board, game.score, this.MOVE_VALUE.BUILD_ROW) );
    //suggestedMoves.push( this.blockFork(game.board, this.MOVE_VALUE.BLOCK_FORK) );
    suggestedMoves.push( this.getRandomMove(game.board, this.MOVE_VALUE.RANDOM) );
    return this.analyzeMove(suggestedMoves).pt;
};

AILookahead.prototype.analyzeMove = function(moves) {
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
