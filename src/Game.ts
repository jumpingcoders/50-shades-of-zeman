export default class Game {

    public gameTime: number = 0;


    getSpeed(): number {
        return this.getBaseSpeed()+this.getFactorsSpeed();
    }


    getBaseSpeed(): number {
        return Math.pow(2,(this.gameTime/6000));
    }




    getFactorsSpeed(): number {

    }


}


class VomitFactor{



}