import { GameObject } from "./gameobject.js"
import * as input from "./input.js"
import * as player from "./player.js"
import * as render from "./render.js"
import { Tree } from "./tree.js"

export interface GameUpdatable{
    update(game:Game,deltaTime: number):void
}

export class Game {
    lastTime: number = 0
    running: boolean = false
    player: player.Player
    input: input.Input
    render: render.Render
    renderobjects: render.RenderObject[]
    gameObjects: GameObject[]

    constructor() {
        var canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;

        this.player = new player.Player(this,5, 120)
        this.input = new input.Input()
        this.render = new render.Render(canvas)

        var tree = new Tree(this,100, 100)

        this.renderobjects = []
        this.renderobjects.push(this.player)
        this.renderobjects.push(tree)

        this.gameObjects = []
        this.gameObjects.push(this.player)
        this.gameObjects.push(tree)
    }

    update(deltaTime: number) {
        this.player.update(this, deltaTime)
        this.renderobjects.sort((a, b) => a.renderYorder - b.renderYorder);


        this.render.update(this, deltaTime)
    }

    loop(timestamp: number) {
        const deltaTime = timestamp - this.lastTime;
        this.lastTime = timestamp;
        this.update(deltaTime);
        if (this.running) {
            requestAnimationFrame((t) => this.loop(t))
        }
    }

    pause(start:boolean = false) {
        console.log("Pause game")
        if(start && this.running){
            return
        }
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
