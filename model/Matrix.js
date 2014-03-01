/* Matrix
 * --------------------------------------------------------------- */

var Matrix = function(n, m) {
	var self = this;
	this.state = [];
	_.each(_.range(m), function() {
		var inner = [];
		_.each(_.range(n), function() {
			inner.push(0);
		});
		self.state.push(inner);
	});
};

Matrix.prototype.each = function(fn) {
	var self = this;
	_.each(self.state, function(row, y) {
		_.each(row, function(obj, x) {
			fn(obj);
		});
	});
};

Matrix.prototype.set = function(pt, obj) {
	this.state[pt.y][pt.x] = obj;
};

Matrix.prototype.get = function(pt) {
	return this.state[pt.y][pt.x];
};