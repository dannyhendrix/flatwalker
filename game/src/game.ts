const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;
canvas.width = 800;
canvas.height = 600;

class Game {
    lastTime: number = 0;

    update(deltaTime: number) {
        // Update game logic
    }

    draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Draw game objects here
    }

    loop(timestamp: number) {
        const deltaTime = timestamp - this.lastTime;
        this.lastTime = timestamp;

        this.update(deltaTime);
        this.draw();

        requestAnimationFrame((t) => this.loop(t));
    }

    start() {
        requestAnimationFrame((t) => this.loop(t));
    }
}

const game = new Game();
game.start();
