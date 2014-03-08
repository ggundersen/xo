/* Decision Tree
 * --------------------------------------------------------------- */

var AIDecisionTree = function(val) {
    this.val = val;
};

AIDecisionTree.prototype = Object.create(AIAbstract.prototype);

AIDecisionTree.prototype.getMove = function(game) {};

AIDecisionTree.prototype.analyzeMove = function(moves) {};
