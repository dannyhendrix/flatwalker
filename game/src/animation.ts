export class Animation{
    frameHeight:number = 39
    frameWidth:number = 22
    frameTime:number = 8
    lastFrameTime:number = 0
    spriteSheet: HTMLImageElement
    currentAnimation: number[][] = []
    currentFrame: number = 0
    constructor(frameWidth:number,frameHeight:number,spriteSheet:HTMLImageElement){
        this.frameHeight = frameHeight
        this.frameWidth = frameWidth
        this.spriteSheet = spriteSheet
    }
    draw(ctx:CanvasRenderingContext2D,x:number,y:number,animation:number[][]){
        if(animation != this.currentAnimation){
            console.log("animation diff")
            this.lastFrameTime = 0
            this.currentFrame = 0
            this.currentAnimation = animation
        }else{
            this.lastFrameTime += 1
        }
        if(this.lastFrameTime >= this.frameTime){
            this.currentFrame = (this.currentFrame + 1) % animation.length
            this.lastFrameTime = 0
        }
        var indexX = animation[this.currentFrame][0]
        var indexY = animation[this.currentFrame][1]
        ctx.drawImage(
            this.spriteSheet,
            indexX * this.frameWidth, indexY * this.frameHeight, // Source X, Y (sprite row)
            this.frameWidth, this.frameHeight,   // Source width, height
            x, y,                      // Destination X, Y
            this.frameWidth, this.frameHeight    // Destination width, height
        );
    }
    // 286/13 x 156/4
}