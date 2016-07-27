var Object2d = (function () {
    function Object2d(context, x, y, width, height, color) {
        this.Context = context;
        this.X = x;
        this.Y = y;
        this.Width = width;
        this.Height = height;
        this.Color = color;
    }
    Object2d.prototype.Draw = function () {
        this.Context.fillStyle = this.Color;
        this.Context.fillRect(this.X, this.Y, this.Width, this.Height);
    };
    return Object2d;
}());
