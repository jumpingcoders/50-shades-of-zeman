import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Game from './Game/';
import Music from './Music';
import Controls from './Controls';
import SceneDataModel from './SceneDataModel';
import Root from './Scene/Root';
import './index.css';

const sceneDataModel = new SceneDataModel();
const sceneElement = document.getElementById("scene") as any;



const game = new Game(sceneDataModel);
let music = new Music('libuse',game);
let controls = new Controls(window);




ReactDOM.render(
    <Root sceneDataModel={sceneDataModel}/>,
    sceneElement
);

