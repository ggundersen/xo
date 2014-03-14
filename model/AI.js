/* AI
 * --------------------------------------------------------------- */

var AI = function(val, team /*, mixins */) {

    // `new` is syntactic sugar. `AI` does not return an instance of
    // AI. Rather, it returns an object it builds at runtime.
    var aiInstance = {
        val: val,
        team: team,
        human: 1, // TODO: Why do these options need to be configurable?
    };

    var mixin = function(obj, behaviors) {
        for (var i = 0; i < behaviors.length; i++) {
            for (var prop in behaviors[i]) {
                obj[prop] = behaviors[i][prop];
            }
        }
        return obj;
    };

    return mixin(aiInstance, Array.prototype.slice.call(arguments, 2));
};
