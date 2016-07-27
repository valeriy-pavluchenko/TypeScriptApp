class Game {
    public static Start(): void {
        let area = new Area();
        area.DrawArea();
    }
}

class Area {
    private _context: CanvasRenderingContext2D;
    private _canvas: HTMLCanvasElement;
    private _interval: number;
    private _keys: boolean[];

    constructor() {
        this._canvas = document.createElement("canvas");
        this._canvas.width = 480;
        this._canvas.height = 270;
        this._context = this._canvas.getContext("2d");
        this._interval = 20; // area update interval
        this._keys = this._keys || [];
    }

    public Player: Vehicle;

    public DrawArea(): void {
        $(".canvas").append(this._canvas);
        setInterval(() => this.UpdateArea(), this._interval);
        this.AddKeyEventListeners();

        this.Player = new Vehicle(60, 0.5, this._context, 30, 30, 15, 15, "red");
    }

    public ClearArea(): void {
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }

    public UpdateArea(): void {
        this.ClearArea();

        this.Player.SpeedX = 0;
        this.Player.SpeedY = 0;
        this.AddKeyBindings();
        this.Player.Drive();
        this.Player.Draw();
    }

    private AddKeyBindings(): void {
        if (this._keys && this._keys[37]) { this.Player.SpeedX = -1; }
        if (this._keys && this._keys[38]) { this.Player.SpeedY = -1; }
        if (this._keys && this._keys[39]) { this.Player.SpeedX = 1; }
        if (this._keys && this._keys[40]) { this.Player.SpeedY = 1; }
    }

    private AddKeyEventListeners(): void {
        window.addEventListener('keydown', e => {
            this._keys[e.keyCode] = (e.type === "keydown");
        });
        window.addEventListener('keyup', e => {
            this._keys[e.keyCode] = (e.type === "keydown");
        });
    }
}