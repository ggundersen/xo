/* AISearch
 * --------------------------------------------------------------- */

var AISearch = function(val) {
    this.val = val;
};

AISearch.prototype = Object.create(AIAbstract.prototype);

AISearch.prototype.getMove = function(game) {
    var suggestedMoves = [];
    suggestedMoves.push( this.win(game.board, game.score, this.MOVE_VALUE.WIN) );
    suggestedMoves.push( this.block(game.board, game.score, this.MOVE_VALUE.BLOCK_WIN) );
    suggestedMoves.push( this.random(game.board, this.MOVE_VALUE.RANDOM) );
    return AISearch.prototype.analyze(suggestedMoves).pt;
};
