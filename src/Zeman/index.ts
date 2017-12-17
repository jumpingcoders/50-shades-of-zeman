import TimeLine from './TimeLine';
import SceneDataModel from '../SceneDataModel';
import Controls from '../Controls';


export default class Zeman extends TimeLine {

    public alcohol: number = 0.001;
    public musicSpeed: number = 1;
    private _superRotation: number = 0;



    constructor(
        private _sceneDataModel: SceneDataModel,
        private _controlls: Controls,
    ) {
        super();
        this._frame();

        setInterval(()=>{

            if(Math.random()<1/10){

                const amount = 0.01;
                console.log('Drink!',amount);
                this.alcohol+= amount;
            }

            this.alcohol *= 0.8;
            /*const probabilityOdDrinking = Math.pow(Math.max(0,(-1/this.ms)+1),100);
            if(Math.random()<probabilityOdDrinking){

                console.log('Drink!',probabilityOdDrinking);
               this.alcohol+= Math.random()/100;
            }*/



         },100);
    }

    private _frame() {
        const lastNow = performance.now();
        requestAnimationFrame((now: number) => {
            const ms = performance.now() - lastNow;


            //this.alcohol -= .001*(ms/1000);
            //if(this.alcohol<0)this.alcohol=0;

            //this.alcohol *= Math.pow(0.99,1/(ms/1000));
            /*if(Math.random()<1/100){
                this.alcohol += ms/1000;
            }*/


            this._superRotation += this.alcohol*1000*(Math.random()-.4);//Math.sin(this.ms/1000*Math.PI)*this.alcohol*ms/1000;


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
        this._sceneDataModel.zemanPerson = Math.sin((this._superRotation+this._controlls.angle)/100)*45;
        this._sceneDataModel.alcohol = this.alcohol;
        this._sceneDataModel.score = Math.floor(this.ms/1000);

    }
}