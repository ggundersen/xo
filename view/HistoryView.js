/* HistoryView
 * --------------------------------------------------------------- */

var HistoryView = function($siblingEl) {

	this.$el = $('#history');
	this.$el.empty();
	this.$el.append('<button class="backward"><</button><button class="forward">></button>');

	Events.publish(this.$el.find('.backward'), 'click', 'clickPrev');
	Events.publish(this.$el.find('.forward'), 'click', 'clickNext');

};
