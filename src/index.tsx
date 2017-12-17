import Game from './Game/';
import Music from './Music';
import Controls from './Controls';
import './index.css';

const game = new Game();
let music = new Music('libuse',game);
let controls = new Controls(window);
