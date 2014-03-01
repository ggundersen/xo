/* xo
 * 2014-03-01
 * Gregory Gundersen
 * =============================================================== */

var App = {
	Model: {},
	View: {},
	Controller: {}
};

$(function() {

    var board = new Board();
    var game = new Game(board);

    // Keep anything that is not STATEFUL out of Game, &c.
    var boardView = new BoardView(board);
	var moveManager = new MoveManager(board, game, history);

    // state = state.board.move(["Kf5", "Kd5"]);
    // var suggest = AI.suggestMove(state); // ["Kf5", "Kd5"]
    // state = state.board.move(suggest);

});
