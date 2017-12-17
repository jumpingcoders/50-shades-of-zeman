import zeman from './Zeman';

export default class Music {
    public el: HTMLAudioElement;

    constructor(name:string,private _zeman: zeman) {
        this.el = new Audio;
        this.el.src = `/assets/sounds/${name}.mp3`;
        this.el.play();

        setInterval(()=>{
            this.updatePlayerSpeed();
        }, 200);
    }

    updatePlayerSpeed() {
        let speed = this._zeman.musicSpeed;
        console.log(speed);
        if (speed < .5) speed = .5;
        if (speed > 3) speed = 3;
        this.el.playbackRate = speed;
    }
}