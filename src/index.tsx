import Game from './Game';
import Controls from './Controls';
import './index.css';

const game = new Game();

class Music {
    public el: HTMLAudioElement;

    constructor() {
        this.el = new Audio();
        this.el.src = '/assets/sounds/libuse.mp3';
        this.el.play();
    }

    updatePlayerSpeed() {
        this.el.playbackRate = game.getSpeed();
    }
}

let music = new Music;

let controls = new Controls(window);

setInterval(function() {
    music.updatePlayerSpeed();
}, 200);


















