/* xo
 * 2014-03-01
 * Gregory Gundersen
 *
 * http://www.ntu.edu.sg/home/ehchua/programming/java/JavaGame_TicTacToe_AI.html
 * http://www.mathworks.com/moler/exm/chapters/tictactoe.pdf
 * =============================================================== */

window.XO = {};

window.onload = function() {

    XO.CONST = {
        CROSSES: 'X',
        NOUGHTS: 'O',
        // TODO: These are baked in values here and in the DOM. This
        // is obviously suboptimal. Create a view for the options and
        // pass these values in?
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
        // `val` is immutable; `team` is not.
        human: {
            val: 1,
            team: XO.CONST.CROSSES
        },
        // The AI's default is in AIFactory.js
        ai: {
            val: -1,
            team: XO.CONST.NOUGHTS
        },
        bootstrapperEl: document.getElementById('board'),
        boardSize: 3,
        // TODO: Simplify this object.
        css: {
            board: {
                width: 300
            },
            square: {
                borderWidth: 1
            },
            piece: {
                // TODO: Make the human *always* red or black?
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

        // TODO: Fix this silly code. I can't instantiate the options
        // object with `player` and `ai` objects because they will
        // override the `config` object. 
        config.human.team = player;
        config.ai.team = (config.human.team === XO.CONST.CROSSES ? XO.CONST.NOUGHTS : XO.CONST.CROSSES);
        config.ai.type = ai;

        game = new Game(config);
    };

};
