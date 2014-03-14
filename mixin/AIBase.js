/* AIBase
 * 
 * `AIBase` is the base behavior mixin. It allows the strategy
 * mixins, i.e. `AIRules`, to call every move. What moves are
 * returned is decided by `AIFactory`, which composes the AI
 * instance.
 * 
 * `get_move` is the key function. Critically, `get_move` never
 * changes the state of the board or the score, even when it looks
 * ahead.
 *
 * Consider an alternative, where the AI manipulates (i.e. makes the
 * move) the board's board itself. This kind of state change is less
 * than desirable.
 * --------------------------------------------------------------- */

AIBase = {
    
    get_move: function() {},
    win: function() {},
    block_win: function() {},
    fork: function() {},
    block_fork: function() {},
    empty_center: function() {},
    empty_corner: function() {},
    random: function() {}

};
