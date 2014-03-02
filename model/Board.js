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

Board.prototype.isTriple = function(pt) {

    var player = this.get(pt),
        n = 3,
        i, j, k,
        nextPoint;

    // Search horizontally
    var hCount = 1;
    for (i = 1; i < n; i++) {
        nextPoint = new Point(pt.x + i, pt.y);
        if (player !== this.get(nextPoint)) {
            break;
        } else {
            hCount += 1;
        }
    }

    var vCount = 1;
    for (j = 1; j < n; j++) {
        nextPoint = new Point(pt.x, pt.y + j);
        if (player !== this.get(nextPoint)) {
            break;
        } else {
            vCount += 1;
        }
    }

    var dCount = 1;
    for (k = 1; k < n; k++) {
        nextPoint = new Point(pt.x + k, pt.y + k);
        if (player !== this.get(nextPoint)) {
            break;
        } else {
            dCount += 1;
        }
    }

    if (hCount === 3 || vCount === 3 || dCount === 3) {
        console.log('game over');
    }

};
