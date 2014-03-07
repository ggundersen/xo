/* Board
 * --------------------------------------------------------------- */

var Board = function(N) {
    this.N = N;
    this.state = _.map(_.range(this.N * this.N), function() {
        return 0;
    });
    this.score = _.map(_.range(2 * this.N + 2), function() {
        return 0;
    }); 
};

Board.prototype.add = function(pt, piece) {
    this.updateScore(pt, piece);
    this.state[this.index(pt)] = piece;
};

Board.prototype.updateScore = function(pt, piece) {
    this.score[pt.x] += piece;
    this.score[pt.y + this.N] += piece;
    if (pt.x === pt.y) {
        this.score[2 * this.N] += piece;
    }
    if (pt.x + pt.y === this.N - 1) {
        this.score[2 * this.N + 1] += piece;
    }
};

Board.prototype.eachScore = function(fn) {
    var i = 0;
    for (; i < this.score.length; i++) {
        fn(this.score[i], i);
    }
};

Board.prototype.get = function(pt) {
    return this.state[this.index(pt)];
};

Board.prototype.index = function(pt) {
    return pt.x + (pt.y * this.N);
};

Board.prototype.pt = function(index) {
    return new Point(index % this.N, Math.floor(index / this.N));
};

Board.prototype.isWin = function() {
    for (var i = 0; i < this.score.length; i++) {
        if (Math.abs(this.score[i]) === this.N) {
            return true;
        }
    }
    return false;
};

Board.prototype.isFull = function() {
    for (var i = 0; i < this.state.length; i++) {
        if (this.state[i] === 0) {
            return false;
        }
    }
    return true;
};
