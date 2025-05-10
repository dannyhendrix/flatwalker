import { Animation } from "./animation.js";
import { ImageControllerInstance,ImageKeys } from "./imagecontroller.js";
import * as game from "./game.js";

const ANIMATION_FRAME_W = 90
const ANIMATION_FRAME_H = 99
const ANIMATION = [[0,0]]
export class Tree implements game.GameUpdatable {
    x: number;
    y: number;
    animation: Animation

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.animation = new Animation(ANIMATION_FRAME_W,ANIMATION_FRAME_H,ImageControllerInstance.getImage(ImageKeys.trees))
    }

    update(mygame:game.Game, deltaTime:number) {

    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, 20, 20);
        this.animation.draw(ctx,this.x,this.y, ANIMATION)
    }
}
