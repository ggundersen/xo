/* xo
 * 2014-03-01
 * Gregory Gundersen
 *
 * http://www.ntu.edu.sg/home/ehchua/programming/java/JavaGame_TicTacToe_AI.html
 * =============================================================== */

window.onload = function() {

    var defaults = {
        boardSize: 3,
        ai: {
            team: -1
        },
        css: {
            board: {
                width: 300
            },
            square: {
                borderWidth: 1
            },
            piece: {
                width: 9,
                xColor: '#ff0000',
                oColor: '#000000'
            }
        }
    };

    var config = {
        
    }

    document.getElementById('newGame').onclick = function() {
        var useAI = document.getElementById('useAI').checked;
        var playerNode = document.getElementById('playersTeam');
        var player = playerNode.options[playerNode.selectedIndex].text;
        
        console.log(useAI);
        console.log(player);
        GameBuilder(_.extend({}, defaults, config));
    };
};
