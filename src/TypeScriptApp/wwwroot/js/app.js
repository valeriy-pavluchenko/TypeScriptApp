/// <reference path="../node_modules/definitely-typed-jquery/jquery.d.ts" />
var SuperClass = (function () {
    function SuperClass() {
    }
    SuperClass.prototype.Method1 = function () {
        return "TAKE SOME SHIT MOTHERFUCKER";
    };
    SuperClass.prototype.Method2 = function () {
        $(".shit").append(this.Method1());
    };
    return SuperClass;
}());
