import * as input from "./input.js"
import * as game from "./game.js"
import * as animation from "./animation.js"
import { ImageControllerInstance, ImageKeys} from "./imagecontroller.js"

export enum PlayerDirection {
    Up, Down, Left, Right
}

const ANIMATION_FRAME_W = 22
const ANIMATION_FRAME_H = 39
const ANIMATION_IDLE_UP = [[0,0],[1,0],[2,0]]
const ANIMATION_IDLE_DOWN = [[0,2],[1,2],[2,2]]
const ANIMATION_IDLE_LEFT = [[0,1],[1,1],[2,1]]
const ANIMATION_IDLE_RIGHT = [[0,3],[1,3],[2,3]]
const ANIMATION_WALK_UP = [[3,0],[4,0],[5,0]]
const ANIMATION_WALK_DOWN = [[3,2],[4,2],[5,2]]
const ANIMATION_WALK_LEFT = [[3,1],[4,1],[5,1]]
const ANIMATION_WALK_RIGHT = [[3,3],[4,3],[5,3]]
const ANIMATION_DIE = [[12,0],[12,1],[12,2]]

export class Player implements game.GameUpdatable {
    x: number;
    y: number;
    speed: number = 2
    runspeed: number = 5
    state_direction: PlayerDirection = PlayerDirection.Down
    state_isMoving = false
    state_isRunning = false
    animation: animation.Animation

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.animation = new animation.Animation(ANIMATION_FRAME_W,ANIMATION_FRAME_H,ImageControllerInstance.getImage(ImageKeys.player))
    }

    update(mygame:game.Game, deltaTime:number) {
        this.setPlayerState(mygame.input)
        this.handlePlayerState()
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, 20, 20);
        this.animation.draw(ctx,this.x,this.y, this.getAnimationFromState())
    }
    
    setPlayerState(controleInput:input.Input) {
        var indexUp = controleInput.keys.indexOf(input.GameControls.MoveUp)
        var indexDown = controleInput.keys.indexOf(input.GameControls.MoveDown)
        var indexLeft = controleInput.keys.indexOf(input.GameControls.MoveLeft)
        var indexRight = controleInput.keys.indexOf(input.GameControls.MoveRight)
        var highest = Math.max(indexUp,indexDown,indexLeft,indexRight)
        if(highest > -1)
            this.state_direction = this.getPlayerDirectionFromControl(controleInput.keys[highest])
        this.state_isRunning = controleInput.isKeyPressed(input.GameControls.Run)
        this.state_isMoving = highest > -1
    }

    getPlayerDirectionFromControl(control:input.GameControls){
        switch(control){
            case input.GameControls.MoveDown: return PlayerDirection.Down
            case input.GameControls.MoveUp: return PlayerDirection.Up
            case input.GameControls.MoveLeft: return PlayerDirection.Left
            case input.GameControls.MoveRight: return PlayerDirection.Right
        }
        return PlayerDirection.Down
    }

    handlePlayerState(){
        if(!this.state_isMoving) 
            return
        var walkspeed = this.speed
        if(this.state_isRunning) 
            walkspeed = this.runspeed
        switch(this.state_direction){
            case PlayerDirection.Down:
                this.y += walkspeed
                break
            case PlayerDirection.Up:
                this.y -= walkspeed
                break
            case PlayerDirection.Left:
                this.x -= walkspeed
                break
            case PlayerDirection.Right:
                this.x += walkspeed
                break
        }
    }

    getAnimationFromState(){
        switch(this.state_direction){
            case PlayerDirection.Down:
                if(this.state_isMoving) 
                    return ANIMATION_WALK_DOWN
                return ANIMATION_IDLE_DOWN
            case PlayerDirection.Up:
                if(this.state_isMoving) 
                    return ANIMATION_WALK_UP
                return ANIMATION_IDLE_UP
            case PlayerDirection.Left:
                if(this.state_isMoving) 
                    return ANIMATION_WALK_LEFT
                return ANIMATION_IDLE_LEFT
            case PlayerDirection.Right:
                if(this.state_isMoving) 
                    return ANIMATION_WALK_RIGHT
                return ANIMATION_IDLE_RIGHT
        }
    }
}
