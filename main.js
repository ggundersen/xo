/* xo
 * 2014-03-01
 * Gregory Gundersen
 *
 * http://www.ntu.edu.sg/home/ehchua/programming/java/JavaGame_TicTacToe_AI.html
 * =============================================================== */

window.onload = function() {

    var options = {};

    // This config object does not need to be used, but it is a good
    // one-stop shop for configuration. I believe this is the
    // Decorator Pattern.
    var defaults = {
        human: {
            team: 1 // 'X'
        },
        ai: {
            team: -1 // 'O'
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
        options.human.team = (player === 'X' ? 1 : -1);
        options.ai = {}
        options.ai.team = (options.human.team === 1 ? -1 : 1);
        
        game = new Game( _.extend({}, defaults, options) );
    };

};
