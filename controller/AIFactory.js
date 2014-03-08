/* AIFactory
 * --------------------------------------------------------------- */

var AIFactory = function(options) {

    var ai,
        type = options.type,
        val = options.val;
    
    // TODO: Should this be a switch statement?
    if (type === XO.CONST.AI_TYPE.BRUTE_FORCE) {
        ai = new AISearch(val);
    } else if (type === XO.CONST.AI_TYPE.RANDOM) {
        ai = new AIRandom(val);
    } else if (type === XO.CONST.AI_TYPE.SEARCH) {
        ai = new AISearch(val);
    } else {
        // TODO: There is a default here but also a default in the
        // config object.
        ai = new AIDecisionTree(val);
    }

    return ai;
};
