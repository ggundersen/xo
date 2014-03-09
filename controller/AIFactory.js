/* AIFactory
 * --------------------------------------------------------------- */

var AIFactory = function(options) {

    var ai,
        type = options.type,
        val = options.val;
    
    // TODO: Should this be a switch statement?
    if (type === XO.CONST.AI_TYPE.RANDOM) {
        ai = new AIRandom(val);
    } else if (type === XO.CONST.AI_TYPE.LOOKAHEAD) {
        ai = new AILookahead(val);
    } else {
        ai = new AILookahead(val);
    }

    return ai;
};
