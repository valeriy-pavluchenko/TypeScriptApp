var Weapon = (function () {
    function Weapon(ammo, power, speed) {
        this.Ammo = ammo;
        this.Power = power;
        this.Speed = speed;
    }
    Weapon.prototype.Shot = function () {
        console.log("weapon shot");
    };
    return Weapon;
}());
