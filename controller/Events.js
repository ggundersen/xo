/* Events
 * --------------------------------------------------------------- */

var Events = {

	channel: {},

	on: function(eventName, callback) {
		if (!this.channel[eventName]) {
			this.channel[eventName] = [];
		}
		this.channel[eventName].push(callback);
	},

	fire: function(eventName, args) {
		if (!this.channel[eventName]) { return false; }
		_.each(this.channel[eventName], function(callback) {
			callback(args);
		});
	},

	publish: function($el, domEvent, jsEvent, args) {
		$el.on(domEvent, function(evt) {
			evt.stopPropagation();
			Events.fire(jsEvent, args);
		});
	}

};