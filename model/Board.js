/* Board
 * --------------------------------------------------------------- */

var Board = function(N) {
    this.N = N;
    this.state = _.map(_.range(this.N * this.N), function() {
        return -1;
    });
    this.score = _.map(_.range(2 * this.N + 2), function() {
        return 0;
    }); 
};

Board.prototype.add = function(pt, piece) {
    this.update(pt, piece);
    this.state[this.index(pt)] = piece;
};

Board.prototype.update = function(pt, piece) {
    this.score[pt.x] += piece;
    this.score[pt.y + this.N] += piece;
    if (pt.x === pt.y) {
        this.score[2 * this.N] += piece;
    }
    if (pt.x + pt.y === this.N - 1) {
        this.score[2 * this.N + 1] += piece;
    }
    console.log(this.score);
};

Board.prototype.get = function(pt) {
    return this.state[this.index(pt)];
};

Board.prototype.index = function(pt) {
    return pt.x + (pt.y * 3);
};

Board.prototype.isWin = function() {
    for (var i = 0; i < this.score.length; i++) {
        if (Math.abs(this.score[i]) === 3) {
            return true;
        }
    }
    return false;
};
