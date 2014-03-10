/* AIFactory
 * --------------------------------------------------------------- */

var AIFactory = function(options) {

    var ai,
        type = options.type,
        team = options.team,
        val = options.val;
    
    // TODO: Should this be a switch statement?
    if (type === XO.CONST.AI_TYPE.RANDOM) {
        ai = new AI(val, team, AIBehaviorRandom);
    } else if (type === XO.CONST.AI_TYPE.LOOKAHEAD) {
        //ai = new AI(val, team, AIBehaviorRandom, AIBehaviorScan, AIBehaviorLookahead);
        ai = new AI(val, team, AIBehaviorRandom, AIBehaviorScan);
    } else {
        ai = new AI(val, team, AIBehaviorRandom, AIBehaviorScan);
    }

    return ai;
};
