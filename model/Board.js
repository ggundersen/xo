/* Board
 * --------------------------------------------------------------- */

var Board = function() {

    //  4	9	2
    //  3	5	7
    //  8	1	6
    // 
    // The real benefit  of converting the board to a magic square is
    // that now we can get a *reference* to a square via a simple
    // equation. See the `Magic` metaobject for more.
    /*var state = {
        '_4': { pt: new Point(0, 0), piece: 0 },
        '_9': { pt: new Point(1, 0), piece: 0 },
        '_2': { pt: new Point(2, 0), piece: 0 },
        '_3': { pt: new Point(0, 1), piece: 0 },
        '_5': { pt: new Point(1, 1), piece: 0 },
        '_7': { pt: new Point(2, 1), piece: 0 },
        '_8': { pt: new Point(0, 2), piece: 0 },
        '_1': { pt: new Point(1, 2), piece: 0 },
        '_6': { pt: new Point(2, 2), piece: 0 }
    };*/

    var state = [
        { piece: null, magic: 4 },
        { piece: null, magic: 9 },
        { piece: null, magic: 2 },
        { piece: null, magic: 3 },
        { piece: null, magic: 5 },
        { piece: null, magic: 7 },
        { piece: null, magic: 8 },
        { piece: null, magic: 1 },
        { piece: null, magic: 6 }
    ];

    return {

        N: 3,

        SUM: 15,
        
        set: function(idx, piece) {
            state[idx].piece = piece;
        },
            
        get: function(idx, magic) {
            var i = 0, len = state.length;
            if (magic) {
                for (; i < len; i++) {
                    if (state[i].magic === magic) {
                        return i;
                    }
                }
            } else {
                return state[idx];
            }
        },

        each: function(fn) {
            var i = 0, len = state.length;
            for (; i < len; i++) {
                fn(state[i], i);
            }
        },

        // These two access routines allows us to redefine "empty" to
        // be anything.
        is_full: function() {
            var i = 0, len = state.length;
            for (; i < len; i++) {
                if (!this.is_empty(i)) {
                    return false;
                }
            }
            return true;
        },

        is_empty: function(idx) {
            if (state[idx].piece === null) {
                return true;
            }
            return false;
        }

    };
};
