/* xo
 * 2014-03-01
 * Gregory Gundersen
 *
 * http://www.ntu.edu.sg/home/ehchua/programming/java/JavaGame_TicTacToe_AI.html
 * http://www.mathworks.com/moler/exm/chapters/tictactoe.pdf
 * =============================================================== */

window.XO = {};

window.onload = function() {

    XO = {
        CROSSES: 'X',
        NOUGHTS: 'O',
        // TODO: These are baked in values here and in the DOM.
        // Create a view for the options and pass these values in.
        AI_TYPE: {
            RANDOM: 'random',
            SCAN: 'scan',
            LOOKAHEAD: 'lookahead'
        },
        HUMAN_VAL: 1,
        AI_VAL: -1
    };

    var config = {
        human: {
            val: 1,
            team: XO.CROSSES
        },
        ai: {
            val: -1,
            team: XO.NOUGHTS
        },
        css: {
            boardWidth: 255,
            crossColor: '#ff0000',
            noughtColor: '#000000'
        }
    };

    var game = new Game(config);

    document.getElementById('newGame').onclick = function() {
        var aiNode = document.getElementById('ai'),
            aiType = aiNode.options[aiNode.selectedIndex].text,
            playerNode = document.getElementById('playersTeam'),
            playerTeam = playerNode.options[playerNode.selectedIndex].text;

        config.human.team = playerTeam;
        config.ai.team = (playerTeam === XO.CROSSES ? XO.NOUGHTS : XO.CROSSES);
        config.ai.type = aiType;

        // Human is always red.
        if (config.ai.team === XO.CROSSES) {
            config.css.crossesColor = '#000000';
            config.css.noughtsColor = '#ff0000';
        } else {
            config.css.crossesColor = '#ff0000';
            config.css.noughtsColor = '#000000';
        }

        game = new Game(config);
    };

};
