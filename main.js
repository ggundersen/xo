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
        }
    };

    // This config object does not need to be used, but it is a good
    // one-stop shop for configuration. I believe this is the
    // Decorator Pattern.
    var config = {
        // `val` is immutable for scoring; `team` is not.
        human: {
            val: 1,
            team: XO.CROSSES
            //team: XO.NOUGHTS
        },
        ai: {
            val: -1,
            team: XO.NOUGHTS
            //team: XO.CROSSES
        },
        bootstrapperEl: document.getElementById('board'),
        css: {
            boardWidth: 300,
            piece: {
                thickness: 10,
                xColor: '#ff0000',
                oColor: '#000000'
            }
        }
    };

    var game = new Game(config);

    document.getElementById('newGame').onclick = function() {
        var aiNode = document.getElementById('ai'),
            ai = aiNode.options[aiNode.selectedIndex].text,
            playerNode = document.getElementById('playersTeam'),
            player = playerNode.options[playerNode.selectedIndex].text;

        config.human.team = player;
        config.ai.team = (config.human.team === XO.CROSSES ? XO.NOUGHTS : XO.CROSSES);
        config.ai.type = ai;

        // Set colors so human is always red
        if (config.ai.team === XO.CROSSES) {
            config.css.piece.xColor = '#000000';
            config.css.piece.oColor = '#ff0000';
        } else {
            config.css.piece.xColor = '#ff0000';
            config.css.piece.oColor = '#000000';
        }

        game = new Game(config);
    };

};
