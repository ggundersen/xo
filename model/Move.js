/* Move
 * --------------------------------------------------------------- */

Move = function(pt, val) {
    this.pt = pt;
    this.val = val;
};

Move.prototype.VALUE = {
    'WIN': 9,
    'BLOCK_WIN': 8,
    'BLOCK_FORK': 7,
    'RANDOM': 0,
    'NA': -1
};
