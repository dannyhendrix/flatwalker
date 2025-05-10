import * as game from "./game.js"

export interface RenderObject{
    draw(ctx: CanvasRenderingContext2D): void
}

export class Render implements game.GameUpdatable {
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D
    constructor(canvas:HTMLCanvasElement){
        this.canvas = canvas
        this.ctx = this.canvas.getContext("2d")!;
        canvas.width = 800;
        canvas.height = 600;
    }
    update(mygame:game.Game, deltaTime:number){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        for(var item in mygame.renderobjects){
            var renderitem = mygame.renderobjects[item]
            renderitem.draw(this.ctx)
        }
    }

}