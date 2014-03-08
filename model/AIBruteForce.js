/* AIBruteForce
 * --------------------------------------------------------------- */

var AIBruteForce = function(val) {
    this.val = val;
};

AIBruteForce.prototype = Object.create(AIAbstract.prototype);

AIBruteForce.prototype.getMove = function(game) {}

AIBruteForce.prototype.analyzeMove = function(moves) {};
