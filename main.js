/* XO
 * 2014-03-01
 * Gregory Gundersen
 * =============================================================== */

window.XO = {};

window.onload = function() {

    XO.CROSSES = 'X';
    XO.NOUGHTS = 'O';
    XO.AI_SKILL = {
        RANDOM: 'Random',
        SCAN: 'Scan',
        LOOKAHEAD: 'Lookahead'
    };
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
            config.css.crossColor = '#000';
            config.css.noughtColor = '#ff0000';
        } else {
            config.css.crossColor = '#ff0000';
            config.css.noughtColor = '#000';
        }

        new Game(config);
    }

    init_game(config);
    document.getElementById('newGame').onclick = init_game;

};
