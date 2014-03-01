/* Board
 * --------------------------------------------------------------- */

var Board = function() {
    this.state = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
};

Board.prototype.add = function(pt, piece) {
    this.state[this.index(pt)] = piece;
};

Board.prototype.get = function(pt) {
    return this.state[this.index(pt)];
};

Board.prototype.index = function(pt) {
    return pt.x + (pt.y * 3);
};
