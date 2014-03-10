/* Game
 * --------------------------------------------------------------- */

var Game = function(options) {
    this.turn = 0;
    this.board = new Board(options.boardSize);
    this.events = new Events();
    this.ai = new AIFactory(options.ai);
    this.score = _.map(_.range(2 * options.boardSize + 2), function() {
        return 0;
    });
    
    this.board.view = new BoardView(this, options.bootstrapperEl, options.css);
    
    // TODO: This guy has to be instantiate *after* this.score,
    // otherwise the AI won't know the score. This seems too
    // tightly coupled.
    this.moveManager = new MoveManager(this, options.human, options.ai);
};

Game.prototype.isTurn = function(team) {
    if (this.turn % 2 === 0 && team === XO.CONST.CROSSES) {
        return true;
    } else if (this.turn % 2 !== 0 && team === XO.CONST.NOUGHTS) {
        return true;
    }
    return false;
};
    
Game.prototype.updateScore = function(index, piece) {
    var x = index % this.board.N,
        y = Math.floor(index / this.board.N);

    this.score[x] += piece;
    this.score[y] += piece;

    if (x === y) {
        this.score[2 * this.board.N] += piece;
    }
    if (x + y === this.board.N - 1) {
        this.score[2 * this.board.N + 1] += piece;
    }
};

Game.prototype.isWin = function() {
    for (var i = 0; i < this.score.length; i++) {
        if (Math.abs(this.score[i]) === this.board.N) {
            return true;
        }
    }
    return false;
};
