class Timeline {
    public ms: number = 0;

    tick(ms: number) {
        this.ms += ms;
    }
}


class GameSpeed extends Timeline {

    public vomitFactors: VomitFactor[] = [];

    constructor(){
        super();
        setInterval(()=>{

            this.vomitFactors.push(new VomitFactor(
                Math.random()*4,
                Math.random()*4
            ));
        },100);

    }

    tick(ms: number) {
        super.tick(ms);
        for (const vomitFactor of this.vomitFactors) {
            vomitFactor.tick(ms);
        }
    }

    getSpeed(): number {
        return this.getBaseSpeed() + this.getFactorsSpeed();
    }


    getBaseSpeed(): number {
        return Math.pow(0.5, (this.ms / 6000));
    }

    getFactorsSpeed(): number {
        return this.vomitFactors.reduce((sum, vomitFactor) => vomitFactor.getSpeed(), 0);
    }

}


class VomitFactor extends Timeline {
    constructor(public intensity: number,
                public speed: number) {
        super();
    }

    getSpeed() {


        const angle = this.ms / Math.PI / 1000 * this.speed;

        if (angle > Math.PI)return 0;

        return Math.sin(angle) * this.intensity;

    }


}


export default class Game {
    public gameSpeed: GameSpeed = new GameSpeed;

    constructor() {
        this.frame();
    }

    frame() {
        const lastNow = performance.now();
        requestAnimationFrame((now: number) => {
            const ms = performance.now() - lastNow;
            this.gameSpeed.tick(ms);
            this.frame();
        })
    }

    getSpeed() {
        return this.gameSpeed.getSpeed();
    }
}