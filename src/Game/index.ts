import SceneDataModel from '../SceneDataModel';

class Timeline {
    public ms: number = 0;

    tick(ms: number) {
        this.ms += ms;
    }
}

/*
class GameSpeed extends Timeline {

    public vomitFactors: VomitFactor[] = [];

    constructor(){
        super();
        setInterval(()=>{

            this.vomitFactors.push(new VomitFactor(
                Math.random()*10,
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
        return this.getBaseSpeed() + this.getFactorsSpeed()+0.5;
    }


    getBaseSpeed(): number {
        return Math.pow(0.5, (this.ms / ( 1000 * 60 )));
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


}*/


export default class Game extends Timeline {

    public zemanRotation: number = 0;
    public musicSpeed: number = 1;

    constructor(
        private _sceneDataModel: SceneDataModel
    ) {
        super();
        this.frame();

        /*setInterval(()=>{
            if(Math.random()<1/100){
                console.log('Becher!');
                this.speed = 2;
            }
        },100);*/
    }

    frame() {
        const lastNow = performance.now();
        requestAnimationFrame((now: number) => {
            let ms = performance.now() - lastNow;
            ms = ms * (Math.random()+.5);

            const x = Math.sin(this.ms/1000/10*Math.PI);
            this.musicSpeed = Math.abs(x*4);
            this.zemanRotation += x;

            this._sceneDataModel.zemanPerson = Math.sin(this.zemanRotation/100)*45;
            this._sceneDataModel.alcohol = this.ms/1000/60/10;
            //this.speed *= Math.pow(.5,ms/1000/60);
            this.tick(ms);
            this.frame();
        })
    }
}