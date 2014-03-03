/* MoveManagerFactory
 * --------------------------------------------------------------- */

var MoveManagerFactory = function(board, game, ai) {

    if (ai) {
        this.manager = new AIMoveManager(board, game, ai);
    } else {
        this.manager = new MoveManager(board, game);
    }

};

MoveManagerFactory.prototype.create = function() {
    return this.manager; 
};
