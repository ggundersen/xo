/* AIFactory
 * --------------------------------------------------------------- */

var AIFactory = function(options) {

    var ai,
        type = options.type,
        team = options.team,
        val = options.val;
    
    // TODO: Should this be a switch statement?
    /*if (type === XO.AI_TYPE.RANDOM) {
        ai = new AI(val, team, AIRandom);
    } else if (type === XO.AI_TYPE.SCAN) {
        ai = new AI(val, team, AIRandom, AIScan, AIRules);
    } else {
        ai = new AI(val, team, AIRandom, AIScan, AILookahead, AIRules);
    }*/

    ai = new AI(val, team, AIRandom, AIScan, AILookahead, AIRules);
    return ai;
};
