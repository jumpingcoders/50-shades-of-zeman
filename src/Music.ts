import Game from './Game/';

export default class Music {
    public el: HTMLAudioElement;

    constructor(name:string,private _game: Game) {
        this.el = new Audio;
        this.el.src = `/assets/sounds/${name}.mp3`;
        this.el.play();

        setInterval(()=>{
            this.updatePlayerSpeed();
        }, 200);
    }

    updatePlayerSpeed() {
        let speed = this._game.musicSpeed;
        console.log(speed);
        if (speed < .5) speed = .5;
        if (speed > 3) speed = 3;
        this.el.playbackRate = speed;
    }
}