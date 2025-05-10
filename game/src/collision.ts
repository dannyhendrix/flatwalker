
export class RectangleDefinition{
    x1:number
    y1:number
    x2:number
    y2:number
    x1_r:number
    y1_r:number
    x2_r:number
    y2_r:number
    w:number
    h:number
    constructor(x1:number,w:number,y1:number,h:number){
        this.x1 = x1
        this.y1 = y1
        this.x2 = 0+x1+w
        this.y2 = 0+y1+h
        this.w = 0-x1+this.x2
        this.h = 0-y1+this.y2
        this.x1_r = this.x1
        this.y1_r = this.y1
        this.x2_r = this.x2
        this.y2_r = this.y2
    }
    setPostion(position:PositionDefinition){
        this.x1 = this.x1_r+position.x
        this.x2 = this.x2_r+position.x
        this.y1 = this.y1_r+position.y
        this.y2 = this.y2_r+position.y
    }

}

export class PositionDefinition{
    x:number
    y:number
    constructor(x:number,y:number){
        this.x=x
        this.y=y
    }
}