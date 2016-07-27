class Object2d {
    constructor(context: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, color: string) {
        this.Context = context;
        this.X = x;
        this.Y = y;
        this.Width = width;
        this.Height = height;
        this.Color = color;
    }

    public Context: CanvasRenderingContext2D;
    public X: number;
    public Y: number;
    public Width: number;
    public Height: number;
    public Color: string;

    public Draw(): void {
        this.Context.fillStyle = this.Color;
        this.Context.fillRect(this.X, this.Y, this.Width, this.Height);
    }
}