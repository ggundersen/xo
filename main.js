/* xo
 * 2014-03-01
 * Gregory Gundersen
 *
 * http://www.ntu.edu.sg/home/ehchua/programming/java/JavaGame_TicTacToe_AI.html
 * =============================================================== */

window.onload = function() {

    var options = {};

    var defaults = {
        elName: 'board',
        boardSize: 3,
        ai: {
            team: -1,
            difficulty: 0
        },
        player: {
            team: 1,
        },
        css: {
            board: {
                width: 210
            },
            square: {
                borderWidth: 1
            },
            piece: {
                width: 7,
                xColor: '#ff0000',
                oColor: '#000000'
            }
        }
    };

    var game = new Game( _.extend({}, defaults, options) );

    document.getElementById('newGame').onclick = function() {
        var useAI = document.getElementById('useAI').checked;
        var playerNode = document.getElementById('playersTeam');
        var player = playerNode.options[playerNode.selectedIndex].text;
        
        // TODO: Fix this silly code. I can't instantiate the options
        // object with `player` and `ai` objects because they will
        // override the `defaults` object. 
        options.player = {};
        options.player.team = player === 'X' ? 1 : -1;
        options.ai = {}
        options.ai.team = (options.player.team === 1 ? -1 : 1);
        
        game = new Game( _.extend({}, defaults, options) );
    };

};
