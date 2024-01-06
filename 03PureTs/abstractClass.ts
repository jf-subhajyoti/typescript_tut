abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
    ) {}

    abstract getSepia(): void
    getReelTime() : number {
        // Some calculation
        return 8;
    }
}

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepia", this.burst)
    }
}

const pic1 = new Instagram('Test', 'test', 2);
pic1.getReelTime();