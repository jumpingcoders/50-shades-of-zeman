import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Zeman from './Zeman';
import Music from './Music';
import Controls from './Controls';
import SceneDataModel from './SceneDataModel';
import Root from './Scene/Root';
import './index.css';

const sceneDataModel = new SceneDataModel();
const sceneElement = document.getElementById("scene") as any;


const controls = new Controls(window);
const zeman = new Zeman(sceneDataModel,controls);
let music = new Music('libuse',zeman);



ReactDOM.render(
    <Root sceneDataModel={sceneDataModel}/>,
    sceneElement
);

