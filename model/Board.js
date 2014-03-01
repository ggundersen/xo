/* Board
 * --------------------------------------------------------------- */

var Board = function() {
    this.state = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
    
    // Restrict search space for winning
    this.xs = [];
    this.os = [];
};

Board.prototype.add = function(pt, piece) {
    this.state[this.index(pt)] = piece;
    
    if (piece === 0) {
        this.os.push(pt);
    } else {
        this.xs.push(pt);
    }
    
};

Board.prototype.get = function(pt) {
    return this.state[this.index(pt)];
};

Board.prototype.index = function(pt) {
    return pt.x + (pt.y * 3);
};
