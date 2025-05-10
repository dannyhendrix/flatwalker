export enum ImageKeys{
    player,trees
}
const ImageSources = new Map<ImageKeys, string>([
    [ImageKeys.player,"res/player.png"],
    [ImageKeys.trees,"res/trees.png"]
])

export class ImageController{
    images:Map<ImageKeys,HTMLImageElement>

    constructor(){
        this.images = new Map()
        for (const [key, value] of ImageSources.entries()) {
            console.log(`Key: ${key}, Value: ${value}`);
            var image = new Image()
            image.src = value
            this.images.set(key, image)
        }
    }
    getImage(imageKey:ImageKeys){
        return this.images.get(imageKey)!
    }
}

export const ImageControllerInstance = new ImageController()
