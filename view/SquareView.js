/* SquareVie:taw
 * --------------------------------------------------------------- */

var SquareView = function(game, idx, parentEl, css) {
    this.idx = idx;
    this.board = game.board;

    this.lineWidth = css.piece.thickness;
    this.xColor = css.piece.xColor;
    this.oColor = css.piece.oColor;
    this.borderWidth = 1;
    
    this.radius = ((css.boardWidth / game.board.N) / 2) - (css.piece.thickness / 2) - 1;
    this.squareDim = (css.boardWidth / game.board.N) - (2 * this.borderWidth);

    this.el = document.createElement('canvas');
    this.el.style.height = this.el.style.width = this.squareDim + 'px';
    this.el.style.border = this.borderWidth + 'px solid #fff';
    this.el.height = this.el.width = this.squareDim;
    this.el.className = 'square';
    parentEl.appendChild( this.el );

    this.ctx = this.el.getContext('2d');
    game.events.on(this.el, 'click', 'clickSquare', this.idx);
};

SquareView.prototype.update = function() {
    if (this.board.get(this.idx).piece === XO.CROSSES) {
        this.drawX();
    } else if (this.board.get(this.idx).piece === XO.NOUGHTS) {
        this.drawO();
    }
};

SquareView.prototype.drawX = function() {
    this.drawLine(0, 0, this.squareDim, this.squareDim);
    this.drawLine(0, this.squareDim, this.squareDim, 0);
};

SquareView.prototype.drawO = function() {
    var centerX = centerY = this.squareDim / 2;
    this.ctx.strokeStyle = this.oColor;
    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY, this.radius, 0, 2*Math.PI);
    this.ctx.lineWidth = this.lineWidth;
    this.ctx.stroke();
    this.ctx.closePath();
};

SquareView.prototype.drawLine = function(x1, y1, x2, y2) {
    this.ctx.strokeStyle = this.xColor;
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1); 
    this.ctx.lineTo(x2, y2);
    this.ctx.lineWidth = this.lineWidth;
    this.ctx.stroke();
    this.ctx.closePath();
};
