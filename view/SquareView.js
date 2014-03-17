/* SquareVie:taw
 * --------------------------------------------------------------- */

var SquareView = function(idx, magic, board, events, parentEl, css) {
    var borderWidth = 1;
    this.idx = idx;
    this.magic = magic;
    this.board = board;
    this.css = css;
    this.pieceThickness = 5;
    this.radius = ((css.boardWidth / board.N) / 2) - (this.pieceThickness / 2) - 1;
    this.squareDim = (css.boardWidth / board.N) - (2 * borderWidth);

    var el = document.createElement('canvas');
    el.style.height = el.style.width = this.squareDim + 'px';
    el.style.border = borderWidth + 'px solid #fff';
    el.height = el.width = this.squareDim;
    el.className = 'square';
    parentEl.appendChild( el );

    this.ctx = el.getContext('2d');
    this.drawNumbers();
    events.on(el, 'click', 'clickSquare', this.idx);
};

SquareView.prototype.update = function() {
    if (this.board.get(this.idx).piece === XO.CROSSES) {
        this.drawCrosses();
    } else if (this.board.get(this.idx).piece === XO.NOUGHTS) {
        this.drawNoughts();
    }
};

SquareView.prototype.drawNoughts = function() {
    var centerX = centerY = this.squareDim / 2;
    this.ctx.strokeStyle = this.css.noughtColor;
    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY, this.radius, 0, 2*Math.PI);
    this.ctx.lineWidth = this.pieceThickness;
    this.ctx.stroke();
    this.ctx.closePath();
};

SquareView.prototype.drawCrosses = function() {
    this.drawLine(0, 0, this.squareDim, this.squareDim);
    this.drawLine(0, this.squareDim, this.squareDim, 0);
};

SquareView.prototype.drawLine = function(x1, y1, x2, y2) {
    this.ctx.strokeStyle = this.css.crossColor;
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1); 
    this.ctx.lineTo(x2, y2);
    this.ctx.lineWidth = this.pieceThickness;
    this.ctx.stroke();
    this.ctx.closePath();
};

SquareView.prototype.drawNumbers = function() {
    var fontHeight = 10;
    this.ctx.fillStyle = '#aaa';
    this.ctx.font = '700 ' + fontHeight + 'pt arial';
    this.ctx.fillText(this.magic, 10, (this.squareDim / 2) + (fontHeight / 2));
};
