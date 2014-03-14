/* AIFactory
 * --------------------------------------------------------------- */

var AIFactory = function(options) {
    var aiInstance,
        type = options.type,
        team = options.team,
        val = options.val;
    
    // TODO: Should this be a switch statement?
    if (type === XO.AI_TYPE.RANDOM) {
        aiInstance = new AI(val, team, AIBase, AIRandom, AIRules);
    } else if (type === XO.AI_TYPE.SCAN) {
        aiInstance = new AI(val, team, AIBase, AIRandom, AIScan, AIRules);
    } else {
        aiInstance = new AI(val, team, AIBase, AIRandom, AIScan, AILookahead, AIRules);
    }

    return aiInstance;
};
