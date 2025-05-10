import * as input from "./input.js"
import * as game from "./game.js"

export enum PlayerState {
    Idle, WalkUp, WalkDown, WalkLeft, WalkRight
}

export class Player {
    x: number;
    y: number;
    speed: number = 2
    runspeed: number = 6
    state: PlayerState = PlayerState.Idle
    state_isRunning = false

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    update(mygame:game.Game) {
        this.setPlayerState(mygame.input)
        this.handlePlayerState(this.state)
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, 20, 20);
    }
    
    setPlayerState(controleInput:input.Input) {
        var indexUp = controleInput.keys.indexOf(input.GameControls.MoveUp)
        var indexDown = controleInput.keys.indexOf(input.GameControls.MoveDown)
        var indexLeft = controleInput.keys.indexOf(input.GameControls.MoveLeft)
        var indexRight = controleInput.keys.indexOf(input.GameControls.MoveRight)
        var highest = Math.max(indexUp,indexDown,indexLeft,indexRight)
        this.state = this.getPlayerStateFromControl(controleInput.keys[highest])
        this.state_isRunning = controleInput.isKeyPressed(input.GameControls.Run)
    }

    getPlayerStateFromControl(control:input.GameControls){
        switch(control){
            case input.GameControls.MoveDown: return PlayerState.WalkDown
            case input.GameControls.MoveUp: return PlayerState.WalkUp
            case input.GameControls.MoveLeft: return PlayerState.WalkLeft
            case input.GameControls.MoveRight: return PlayerState.WalkRight
        }
        return PlayerState.Idle
    }

    handlePlayerState(state:PlayerState){
        var walkspeed = this.speed
        if(this.state_isRunning) 
            walkspeed = this.runspeed
        switch(state){
            case PlayerState.WalkDown:
                this.y += walkspeed
                break
            case PlayerState.WalkUp:
                this.y -= walkspeed
                break
            case PlayerState.WalkLeft:
                this.x -= walkspeed
                break
            case PlayerState.WalkRight:
                this.x += walkspeed
                break
        }
    }
}
