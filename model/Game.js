/* Game
 * --------------------------------------------------------------- */

var Game = function(board) {
    
    this.turn = 0;
    this.board = board;

	var boardView = new BoardView(board);
	var moveManager = new MoveManager(board, this, history);

};
