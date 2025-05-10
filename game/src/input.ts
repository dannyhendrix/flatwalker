export enum GameControls {
    MoveUp,
    MoveDown,
    MoveLeft,
    MoveRight,
    Action,
    Run,
    None
}

export class Input {
    keys: GameControls[] = []
    static keyToControl: Map<string,GameControls> = new Map([
        ["ArrowUp", GameControls.MoveUp],
        ["ArrowDown", GameControls.MoveDown],
        ["ArrowLeft", GameControls.MoveLeft],
        ["ArrowRight", GameControls.MoveRight],
        ["Space", GameControls.Action],
        ["Shift", GameControls.Run],
    ])

    constructor() {
        window.addEventListener("keydown", (e) => this.pressButton(e.key));
        window.addEventListener("keyup", (e) => this.releaseButton(e.key));
    }

    pressButton(key: string) {
        var control : GameControls = Input.keyToControl.get(key) ?? GameControls.None
        var index = this.keys.indexOf(control)
        if (index > -1) {
            this.keys.splice(index,1)
        }
        this.keys.push(control)
    }

    releaseButton(key: string){
        var control : GameControls = Input.keyToControl.get(key) ?? GameControls.None
        var index = this.keys.indexOf(control)
        if (index > -1) {
            this.keys.splice(index,1)
        }
        //console.log(key)
    }

    isKeyPressed(key: GameControls) {
        return this.keys.indexOf(key) > -1
    }
}