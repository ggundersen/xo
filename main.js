/* xo
 * 2014-03-01
 * Gregory Gundersen
 *
 * http://www.ntu.edu.sg/home/ehchua/programming/java/JavaGame_TicTacToe_AI.html
 * =============================================================== */

var App = {
	Model: {},
	View: {},
	Controller: {}
};

$(function() {

    var game = new GameBuilder({
        boardSize: 3,
        singlePlayer: true
    });

    // Keep anything that is not STATEFUL out of Game, &c.
    var boardView = new BoardView(game.board);

    // state = state.board.move(["Kf5", "Kd5"]);
    // var suggest = AI.suggestMove(state); // ["Kf5", "Kd5"]
    // state = state.board.move(suggest);

});
