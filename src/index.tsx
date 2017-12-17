import Game from './Game/';
import './index.css';

const game = new Game();

class Music {
    public el: HTMLAudioElement;

    constructor() {
        this.el = new Audio;
        this.el.src = '/assets/sounds/libuse.mp3';
        this.el.play();
    }

    updatePlayerSpeed() {
        let speed = game.musicSpeed;
        console.log(speed);
        if(speed<.5)speed=.5;
        if(speed>3)speed=3;
        this.el.playbackRate = speed;
    }
}

let music = new Music;

setInterval(function() {
    music.updatePlayerSpeed();
}, 200);


















