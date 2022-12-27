interface Camera{
    cameraType:string
}

interface TakePhoto extends Camera{
    cameraMode: string;
    filter: string;
    burst: number,
}

interface Story {
    createStory():void
}

class Instagram implements TakePhoto, Story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public cameraType:string
    ) { }
    createStory(): void {
        console.log("Story is created!")
        console.log(this.filter, " is applied")
        console.log("Other details ",this.burst,this.cameraType)
    }
}

class A{

}

class B{

}

// class C extends A, B{ // not allowed
    
// }

let post = new Instagram("night", "blur", 2, "dslr")
post.createStory()

export {}