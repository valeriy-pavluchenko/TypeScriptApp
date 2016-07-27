var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Cannon = (function (_super) {
    __extends(Cannon, _super);
    function Cannon() {
        _super.call(this, new Shell(), 100, 40);
    }
    return Cannon;
}(Weapon));
