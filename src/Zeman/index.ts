import TimeLine from './TimeLine';
import SceneDataModel from '../SceneDataModel';
import Controls from '../Controls';


export default class Zeman extends TimeLine {


    public musicSpeed: number = 1;
    private _superRotation: number = 0;
    private _sperRotationDelta: number = 0;


    constructor(
        private _sceneDataModel: SceneDataModel,
        private _controlls: Controls,
    ) {
        super();
        this._frame();

        /*setInterval(()=>{
         if(Math.random()<1/100){
         console.log('Becher!');
         this.speed = 2;
         }
         },100);*/
    }

    private _frame() {
        const lastNow = performance.now();
        requestAnimationFrame((now: number) => {
            const ms = performance.now() - lastNow;




            this._superRotation += this._sperRotationDelta*ms/1000;
            this._sperRotationDelta += (Math.random()-.5)*ms/1000;


            //const x = Math.sin(this.ms/1000/10*Math.PI);
            //this.musicSpeed = Math.abs(x*4);
            //this._zemanSuperRotation += x;
            this._writeToSceneDataModel();
            //this.speed *= Math.pow(.5,ms/1000/60);
            this.tick(ms);
            this._frame();
        })
    }


    private _writeToSceneDataModel(){

        this._sceneDataModel.zemanStomach = this._controlls.angle;
        this._sceneDataModel.zemanPerson = Math.sin(this._superRotation/100)*45;
        this._sceneDataModel.alcohol = this.ms/1000/60/10;
        this._sceneDataModel.score = Math.floor(this.ms/1000);

    }
}