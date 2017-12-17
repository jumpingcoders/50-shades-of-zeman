import * as React from 'react';
import {observer} from 'mobx-react';
import SceneDataModel from '../SceneDataModel';


export default observer(({sceneDataModel}: { sceneDataModel: SceneDataModel }) => {
    return (
        <div>
            <p>zemanStomach = {sceneDataModel.zemanStomach}</p>
            <p>zemanPerson = {sceneDataModel.zemanPerson}</p>
            <p>alcohol = {sceneDataModel.alcohol}</p>
            <p>vomited = {sceneDataModel.vomited}</p>
            <p>score = {sceneDataModel.score}</p>
        </div>
    );
});