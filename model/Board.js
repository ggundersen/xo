/* Board
 * 
 * `Board` and `Score` rely on a Magic Square:
 * http://en.wikipedia.org/wiki/Magic_square
 *
 * The Magic Square this game uses is:
 * 4  9  2
 * 3  5  7
 * 8  1  6
 *
 * For implementation details, see the `Score` metaobject.
 * --------------------------------------------------------------- */

var Board = function() {

    var N = 3;

    // "Magic Constant"
    var M = (N * (Math.pow(N, 2) + 1)) / 2;

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

    var LEN = state.length;

    return {

        N: N,
        M: M,
        corner: [0, 2, 6, 8],
        side: [1, 3, 5, 7],
        center: [4],
        
        set: function(idx, piece) {
            state[idx].piece = piece;
        },
            
        get: function(idx, magic) {
            var i = 0;
            if (magic) {
                for (; i < LEN; i++) {
                    if (state[i].magic === magic) {
                        return i;
                    }
                }
            } else {
                return state[idx];
            }
        },

        each: function(fn) {
            var i = 0;
            for (; i < LEN; i++) {
                fn(state[i], i);
            }
        },

        each_empty: function(fn) {
            var i = 0;
            for (; i < LEN; i++) {
                if (this.is_empty_idx(i)) {
                    fn(state[i], i);
                }
            }
        },

        is_empty_idx: function(idx) {
            if (state[idx].piece === null) {
                return true;
            }
            return false;
        },

        is_full: function() {
            var i = 0;
            for (; i < LEN; i++) {
                if (this.is_empty_idx(i)) {
                    return false;
                }
            }
            return true;
        },

        is_empty: function() {
            var i = 0;
            for (; i < LEN; i++) {
                if (!this.is_empty_idx(i)) {
                    return false;
                }
            }
            return true;
        }
    };
};
