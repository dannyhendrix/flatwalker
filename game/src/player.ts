export class Player {
    x: number;
    y: number;
    speed: number = 2;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    update() {
        // Move logic
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, 20, 20);
    }
}
