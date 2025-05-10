import { Animation } from "./animation.js";
import { ImageControllerInstance,ImageKeys } from "./imagecontroller.js";
import * as game from "./game.js";
import { RenderObject } from "./render.js";
import { RectangleDefinition,PositionDefinition } from "./collision.js";
import { GameObject } from "./gameobject.js";

const ANIMATION_FRAME_W = 84
const ANIMATION_FRAME_H = 99
const ANIMATION = [[0,0]]
export class Tree extends GameObject implements RenderObject {
    animation: Animation

    constructor(game:game.Game, x: number, y: number) {
        super(game,x,y,new RectangleDefinition(-4,8,-4,8),new RectangleDefinition(-40,84,-93,99))
        this.animation = new Animation(ANIMATION_FRAME_W,ANIMATION_FRAME_H,ImageControllerInstance.getImage(ImageKeys.trees))
    }

    update(mygame:game.Game, deltaTime:number) {

    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "red";
        //ctx.fillRect(this.x, this.y, 20, 20);
        
        this.animation.draw(ctx,this.frame.x1, this.frame.y1, ANIMATION)
        ctx.fillRect(this.collision.x1, this.collision.y1, this.collision.w, this.collision.h)
        ctx.strokeRect(this.frame.x1, this.frame.y1, this.frame.w, this.frame.h)
    }
}
