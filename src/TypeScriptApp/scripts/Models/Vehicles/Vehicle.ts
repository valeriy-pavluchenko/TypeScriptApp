class Vehicle extends Object2d {
    constructor(speed: number, acceleration: number,
                context: CanvasRenderingContext2D,
                x: number, y: number,
                width: number, height: number,
                color: string) {
        super(context, x, y, width, height, color);
        this.Speed = speed;
        this.Acceleration = acceleration;

    }

    public Speed: number; // to do
    public Acceleration: number; // to do

    public SpeedX: number;
    public SpeedY: number;

    public Drive(): void {
        this.X += this.SpeedX;
        this.Y += this.SpeedY;
    }
}