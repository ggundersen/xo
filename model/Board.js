/* Board
 * --------------------------------------------------------------- */

var Board = function(N) {
    this.N = N;
    this.state = _.map(_.range(this.N * this.N), function() {
        return 0;
    });

};

Board.prototype.add = function(pt, piece) {
    this.state[this.index(pt)] = piece;
};

Board.prototype.isEmpty = function(pt) {
    if (this.state[this.index(pt)] === 0) {
        return true;
    }
    return false;
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

Board.prototype.isFull = function() {
    for (var i = 0; i < this.state.length; i++) {
        if (this.state[i] === 0) {
            return false;
        }
    }
    return true;
};
