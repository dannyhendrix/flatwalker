import { RectangleDefinition,PositionDefinition } from "./collision.js";
import { Game } from "./game";

export class GameObject{
    game: Game
    position: PositionDefinition
    collision: RectangleDefinition
    frame: RectangleDefinition
    renderYorder: number = 0

    constructor(game:Game, x:number, y:number, collision:RectangleDefinition, frame:RectangleDefinition){
        this.game = game
        this.collision = collision
        this.frame = frame
        this.position = new PositionDefinition(x,y)
        this.updatePosition(0,0)
    }

    hasCollision(objects:GameObject[], moveX:number, moveY:number){
        return objects.some(obj => obj != this &&
            moveX + this.collision.x1 < obj.collision.x2 &&
            moveX + this.collision.x2 > obj.collision.x1 &&
            moveY + this.collision.y1 < obj.collision.y2 &&
            moveY + this.collision.y2 > obj.collision.y1
        );
    }
    updatePosition(moveX:number,moveY:number){
        var moved = moveX != 0 || 0 != moveY
        if(moved && this.hasCollision(this.game.gameObjects,moveX,moveY)){
            //console.log("collision "+this.collision.x1+" "+this.collision.x2+" "+this.game.gameObjects[1].collision.x1+" "+this.game.gameObjects[1].collision.x2)
            return
        }
        this.position.x += moveX
        this.position.y += moveY
        this.collision.setPostion(this.position)
        this.frame.setPostion(this.position)
        this.renderYorder = this.position.y
    }
}