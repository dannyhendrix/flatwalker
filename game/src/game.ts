import * as input from "./input.js"
import * as player from "./player.js"

const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;
canvas.width = 800;
canvas.height = 600;

export class Game {
    lastTime: number = 0
    running: boolean = false
    player: player.Player
    input: input.Input

    constructor() {
        this.player = new player.Player(5, 120)
        this.input = new input.Input()
    }

    update(deltaTime: number) {
        this.player.update(this)
    }

    draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.player.draw(ctx)
        // Draw game objects here
    }

    loop(timestamp: number) {
        const deltaTime = timestamp - this.lastTime;
        this.lastTime = timestamp;

        this.update(deltaTime);
        this.draw();
        if (this.running) {
            requestAnimationFrame((t) => this.loop(t))
        }
    }

    start() {
        console.log("Start game")
        this.running = true
        requestAnimationFrame((t) => this.loop(t))

    }

    pause() {
        console.log("Pause game")
        if (this.running) {
            this.running = false
        } else {
            this.running = true
            requestAnimationFrame((t) => this.loop(t))
        }
    }

    testButton() {

        console.log(this.input.keys)
    }
}

const game = new Game();

// Make the function accessible globally
(window as any).pauseGame = () => game.pause();
(window as any).testButton = () => game.testButton();
