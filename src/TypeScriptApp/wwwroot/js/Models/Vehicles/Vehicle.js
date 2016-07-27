var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Vehicle = (function (_super) {
    __extends(Vehicle, _super);
    function Vehicle(speed, acceleration, context, x, y, width, height, color) {
        _super.call(this, context, x, y, width, height, color);
        this.Speed = speed;
        this.Acceleration = acceleration;
    }
    Vehicle.prototype.Drive = function () {
        this.X += this.SpeedX;
        this.Y += this.SpeedY;
    };
    return Vehicle;
}(Object2d));
