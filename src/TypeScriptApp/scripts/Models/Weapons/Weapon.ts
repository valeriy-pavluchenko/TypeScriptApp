abstract class Weapon {
    constructor(ammo: Ammo, power: number, speed: number) {
        this.Ammo = ammo;
        this.Power = power;
        this.Speed = speed;
    }

    public Ammo: Ammo;
    public Power: number;
    public Speed: number;

    public Shot(): void {
        console.log("weapon shot");
    }
}