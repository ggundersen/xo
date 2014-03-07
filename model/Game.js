/* Game
 * --------------------------------------------------------------- */

var Game = function(options) {
    this.turn = 0;
    this.board = new Board(options.boardSize);
    this.events = new Events();
    this.boardView = new BoardView(this, options.bootstrapperEl, options.css);
    this.ai = new AI(options.ai.val);
    this.moveManager = new MoveManager(this, options);
    
    this.score = _.map(_.range(2 * options.boardSize + 2), function() {
        return 0;
    }); 

    // TODO: This code smells. Can it be optimized?
    // This will be a 1 or -1, for X or O
    this.isTurn = function(val) {
        if (this.turn % 2 === 0) {
            if (val === 1) {
                return true;
            } else {
                return false;
            }
        } else {
            if (val === -1) {
                return true;
            } else {
                return false;
            }
        }
    };
    
};

Game.prototype.updateScore = function(pt, piece) {
    this.score[pt.x] += piece;
    this.score[pt.y + this.board.N] += piece;
    if (pt.x === pt.y) {
        this.score[2 * this.board.N] += piece;
    }
    if (pt.x + pt.y === this.board.N - 1) {
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
