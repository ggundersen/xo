/* SquareView
 * --------------------------------------------------------------- */

var SquareView = function(board, pt, parentEl, css) {
    this.pt = pt;
    this.lineWidth = 4;
    this.squareDim = (css.board.width / board.N) - 2 * css.square.borderWidth;
    this.board = board;

    this.el = document.createElement('canvas');
    this.el.style.height = this.el.style.width = this.squareDim + 'px';
    this.el.style.border = css.square.borderWidth + 'px solid #fff';
    this.el.height = this.el.width = this.squareDim;
    this.el.className = 'square';
    parentEl.appendChild( this.el );

    this.ctx = this.el.getContext('2d');
    Events.on(this.el, 'click', 'clickSquare', this.pt);
};

SquareView.prototype.update = function() {
    if (this.board.get(this.pt) === 1) {
        this.drawX();
    } else if (this.board.get(this.pt) === -1) {
        this.drawO();
    }
};

SquareView.prototype.drawX = function() {
    this.drawLine(0, 0, this.squareDim, this.squareDim);
    this.drawLine(0, this.squareDim, this.squareDim, 0);
};

SquareView.prototype.drawO = function() {
    var centerX = centerY = this.squareDim / 2;
    this.ctx.strokeStyle = '#000';
    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY, 22, 0, 2*Math.PI);
    this.ctx.lineWidth = this.lineWidth;
    this.ctx.stroke();
    this.ctx.closePath();
};

SquareView.prototype.drawLine = function(x1, y1, x2, y2) {
    this.ctx.strokeStyle = '#ff0000';
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1); 
    this.ctx.lineTo(x2, y2);
    this.ctx.lineWidth = this.lineWidth;
    this.ctx.stroke();
    this.ctx.closePath();
};
