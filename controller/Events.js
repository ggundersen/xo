/* Events
 * --------------------------------------------------------------- */

var Events = {

	channel: {},
	
    on: function($el, domEvent, jsEvent, args) {
		$el.on(domEvent, function(evt) {
			evt.stopPropagation();
			Events.publish(jsEvent, args);
		});
	},

	publish: function(eventName, args) {
		if (!this.channel[eventName]) {
		    return false;
		}
		_.each(this.channel[eventName], function(callback) {
			callback(args);
		});
	},

    subscribe: function(eventName, callback) {
		if (!this.channel[eventName]) {
			this.channel[eventName] = [];
		}
		this.channel[eventName].push(callback);
	},

    unsubscribe: function(eventName) {
        this.channel[eventName] = undefined;
    }

};
