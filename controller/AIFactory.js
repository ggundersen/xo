/* AIFactory
 * --------------------------------------------------------------- */

var AIFactory = function(skill) {
    var aiInstance;
   
    if (skill === XO.AI_SKILL.RANDOM) {
        aiInstance = new AI(AIBase, AIRandom, AIRules);
    } else if (skill === XO.AI_SKILL.SCAN) {
        aiInstance = new AI(AIBase, AIRandom, AIScan, AIRules);
    } else if (skill === XO.AI_SKILL.LOOKAHEAD) {
        aiInstance = new AI(AIBase, AIRandom, AIScan, AILookahead, AIRules);
    }

    return aiInstance;
};
