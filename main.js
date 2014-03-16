/* XO
 * 2014-03-01
 * Gregory Gundersen
 * =============================================================== */

window.XO = {};

window.onload = function() {

    // Game constants
    XO.CROSSES = 'X';
    XO.NOUGHTS = 'O';
    XO.AI_SKILL = {
        RANDOM: 'Random',
        SCAN: 'Scan',
        LOOKAHEAD: 'Lookahead'
    };
    
    // Globally accessible objects for the human's team and value.
    XO.human = {
        VAL: 1,
        team: 'X'
    };
    XO.ai = {
        VAL: -1,
        team: 'O'
    };

    var config = {
        ai: {
            team: XO.NOUGHTS,
            skill: XO.AI_SKILL.LOOKAHEAD
        },
        css: {
            boardWidth: 300,
            crossColor: '#ff0000',
            noughtColor: '#000000'
        }
    };

    var init_game = function() {
        var teamNode = document.getElementById('aiTeam'),
            aiTeam = teamNode.options[teamNode.selectedIndex].text,
            skillNode = document.getElementById('aiSkill'),
            aiSkill = skillNode.options[skillNode.selectedIndex].text;

        config.ai.skill = aiSkill ? aiSkill : config.ai.skill;
        XO.ai.team = aiTeam ? aiTeam : config.ai.team;
        XO.human.team = (aiTeam === XO.CROSSES ? XO.NOUGHTS : XO.CROSSES);

        // Ensure the human is always red.
        if (config.ai.team === XO.CROSSES) {
            config.css.crossesColor = '#000000';
            config.css.noughtsColor = '#ff0000';
        } else {
            config.css.crossesColor = '#ff0000';
            config.css.noughtsColor = '#000000';
        }

        new Game(config);
    }

    init_game(config);
    document.getElementById('newGame').onclick = init_game;

};
