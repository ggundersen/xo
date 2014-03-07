/* AIFactory
 * --------------------------------------------------------------- */

var AIFactory = function(options) {

    var ai;
    
    if (options.type === XO.CONST.AI_TYPE.RANDOM) {
        ai = new AIRandom(options.val);
    } else {
        ai = new AISearch(options.val);
    }

    return ai;
};
