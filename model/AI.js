/* AI
 * --------------------------------------------------------------- */

var AI = function(/* mixins */) {

    // `new` is syntactic sugar. `AI` does not return an instance of
    // AI. Rather, it returns an object it builds at runtime.
    var aiInstance = {};

    var mix = function(obj, mixins) {
        var i = 0,
            len = mixins.length;

        for (var i = 0; i < mixins.length; i++) {
            for (var prop in mixins[i]) {
                obj[prop] = mixins[i][prop];
            }
        }
        return obj;
    };

    return mix(aiInstance, Array.prototype.slice.call(arguments));
};
