/* History
 *
 * Pattern: Singleton
 *
 * GoF: "It's important for some classes to have exactly one
 * instance... The class can ensure that no other instances can be
 * created (by intercepting requests to create new objects), and it
 * can provide a way to access the instance."
 * --------------------------------------------------------------- */

var History = function() {

	// This allows the constructor to be called multiple times and
	// still refer to the same instance.
	//if (History.instance) {
	//	return History.instance;
	//}
	//History.instance = this;

	this.moves = [];
	this.cache = [];
};

History.prototype.add = function(move) {
	this.moves.push(move);
};

History.prototype.prev = function() {
	return this.moves[this.moves.length - 1];
};
			 
History.prototype.next = function() {
	return this.cache[this.cache.length - 1];
};

History.prototype.undo = function() {
	this.cache.push( this.moves.pop() );
};

History.prototype.redo = function() {
	this.moves.push( this.cache.pop() );
};
