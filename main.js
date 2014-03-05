/* xo
 * 2014-03-01
 * Gregory Gundersen
 *
 * http://www.ntu.edu.sg/home/ehchua/programming/java/JavaGame_TicTacToe_AI.html
 * =============================================================== */

window.onload = function() {
    
    var game = GameBuilder({
        boardSize: 3,
        ai: {
            team: -1
        },
        css: {
            board: {
                width: 225
            },
            square: {
                borderWidth: 1 
            }
        }
    });

};
