/* Events
 * --------------------------------------------------------------- */

var Events = function() {
	this.channel = {};

	this.TYPE = {
        AI_MOVE: 'ai_move'
	};
};
	
Events.prototype.on = function(el, domEvent, jsEvent, args) {
    var self = this;
    el.addEventListener(domEvent, function(evt) {
        self.publish(jsEvent, args);
    });
};

Events.prototype.publish = function(eventName, args) {
    if (!this.channel[eventName]) {
        return false;
    }

    var i = 0,
        len = this.channel[eventName].length;

    for (; i < len; i++) {
        this.channel[eventName][i](args);
    }
};

Events.prototype.subscribe = function(eventName, callback) {
    if (!this.channel[eventName]) {
        this.channel[eventName] = [];
    }
    this.channel[eventName].push(callback);
};

Events.prototype.unsubscribe = function(eventName) {
    this.channel[eventName] = undefined;
};
