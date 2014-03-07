/* xo
 * 2014-03-01
 * Gregory Gundersen
 *
 * http://www.ntu.edu.sg/home/ehchua/programming/java/JavaGame_TicTacToe_AI.html
 * =============================================================== */

window.XO = {};

window.onload = function() {

    XO.CONST = {
        CROSSES: 'X',
        NOUGHTS: 'O',
        EASY: 'easy',
        HARD: 'hard',
    };

    var options = {};

    // This config object does not need to be used, but it is a good
    // one-stop shop for configuration. I believe this is the
    // Decorator Pattern.
    var defaults = {
        // The val is immutable; the team is not.
        human: {
            val: 1,
            team: XO.CONST.CROSSES
        },
        ai: {
            val: -1,
            team: XO.CONST.NOUGHTS,
            difficulty: XO.CONST.EASY
        },
        bootstrapperEl: document.getElementById('board'),
        boardSize: 3,
        css: {
            board: {
                width: 210
            },
            square: {
                borderWidth: 1
            },
            piece: {
                thickness: 7,
                xColor: '#ff0000',
                oColor: '#000000'
            }
        }
    };

    var game = new Game( defaults );

    document.getElementById('newGame').onclick = function() {
        var useAI = document.getElementById('useAI').checked;
        var playerNode = document.getElementById('playersTeam');
        var player = playerNode.options[playerNode.selectedIndex].text;
        
        // TODO: Fix this silly code. I can't instantiate the options
        // object with `player` and `ai` objects because they will
        // override the `defaults` object. 
        options.human = {};
        options.human.team = player;
        options.ai = {}
        options.ai.team = (options.human.team === XO.CONST.CROSSES ? XO.CONST.NOUGHTS : XO.CONST.CROSSES);
        
        game = new Game( _.extend({}, defaults, options) );
        console.log('new game');
        console.log(game);
    };

};
