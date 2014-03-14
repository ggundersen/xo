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
    var state = {
        '_4': { pt: new Point(0, 0), piece: 0 },
        '_9': { pt: new Point(1, 0), piece: 0 },
        '_2': { pt: new Point(2, 0), piece: 0 },
        '_3': { pt: new Point(0, 1), piece: 0 },
        '_5': { pt: new Point(1, 1), piece: 0 },
        '_7': { pt: new Point(2, 1), piece: 0 },
        '_8': { pt: new Point(0, 2), piece: 0 },
        '_1': { pt: new Point(1, 2), piece: 0 },
        '_6': { pt: new Point(2, 2), piece: 0 }
    };

    /*var state = [
        { val: 0, magic: 4 },
        { val: 0, magic: 9 },
        { val: 0, magic: 2 },
        { val: 0, magic: 3 },
        { val: 0, magic: 5 },
        { val: 0, magic: 7 },
        { val: 0, magic: 8 },
        { val: 0, magic: 1 },
        { val: 0, magic: 6 }
    ];*/

    return {

        N: 3,

        SUM: 15,
        
        set: function(num, piece) {
            state[num].piece = piece;
        },
            
        get: function(num) {
            return state[num];
        },

        each: function(fn) {
            for (var num in state) {
                fn(state[num], num);
            }
        },

        // These two access routines allows us to redefine "empty" to
        // be anything.
        is_full: function() {
            for (var num in state) {
                if (state[num].piece === 0) {
                    return false;
                }
            }
            return true;
        },

        is_empty: function(num) {
            console.log(state[num]);
            if (state[num].piece === 0) {
                return true;
            }
            return false;
        }

    };
};
