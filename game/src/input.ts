export enum GameControls {
    MoveUp = "ArrowUp",
    MoveDown = "ArrowDown",
    MoveLeft = "ArrowLeft",
    MoveRight = "ArrowRight",
    Action = "Space",
    Run = "Shift"
}

export class Input {
    keys: string[] = []

    constructor() {
        window.addEventListener("keydown", (e) => this.pressButton(e.key));
        window.addEventListener("keyup", (e) => this.releaseButton(e.key));
    }

    pressButton(key: string) {
        var index = this.keys.indexOf(key)
        if (index > -1) {
            this.keys.splice(index,1)
        }
        this.keys.push(key)
    }

    releaseButton(key: string){
        var index = this.keys.indexOf(key)
        if (index > -1) {
            this.keys.splice(index,1)
        }
        //console.log(key)
    }

    isKeyPressed(key: string) {
        return this.keys.indexOf(key) > -1
    }
}