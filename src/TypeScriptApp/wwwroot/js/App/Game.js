var Game = (function () {
    function Game() {
    }
    Game.Start = function () {
        var area = new Area();
        area.DrawArea();
    };
    return Game;
}());
var Area = (function () {
    function Area() {
        this._canvas = document.createElement("canvas");
        this._canvas.width = 480;
        this._canvas.height = 270;
        this._context = this._canvas.getContext("2d");
        this._interval = 20; // area update interval
        this._keys = this._keys || [];
    }
    Area.prototype.DrawArea = function () {
        var _this = this;
        $(".canvas").append(this._canvas);
        setInterval(function () { return _this.UpdateArea(); }, this._interval);
        this.AddKeyEventListeners();
        this.Player = new Vehicle(60, 0.5, this._context, 30, 30, 15, 15, "red");
    };
    Area.prototype.ClearArea = function () {
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    };
    Area.prototype.UpdateArea = function () {
        this.ClearArea();
        this.Player.SpeedX = 0;
        this.Player.SpeedY = 0;
        this.AddKeyBindings();
        this.Player.Drive();
        this.Player.Draw();
    };
    Area.prototype.AddKeyBindings = function () {
        if (this._keys && this._keys[37]) {
            this.Player.SpeedX = -1;
        }
        if (this._keys && this._keys[38]) {
            this.Player.SpeedY = -1;
        }
        if (this._keys && this._keys[39]) {
            this.Player.SpeedX = 1;
        }
        if (this._keys && this._keys[40]) {
            this.Player.SpeedY = 1;
        }
    };
    Area.prototype.AddKeyEventListeners = function () {
        var _this = this;
        window.addEventListener('keydown', function (e) {
            _this._keys[e.keyCode] = (e.type === "keydown");
        });
        window.addEventListener('keyup', function (e) {
            _this._keys[e.keyCode] = (e.type === "keydown");
        });
    };
    return Area;
}());
