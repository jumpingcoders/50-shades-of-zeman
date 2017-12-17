import * as React from 'react';
import {observer} from 'mobx-react';
import SceneDataModel from '../SceneDataModel';
import './Body.css';


export default observer(({sceneDataModel}: { sceneDataModel: SceneDataModel }) => {
    return (
        <div>
            <div className="playground" style={{
                transform: 'rotate(' + (sceneDataModel.zemanStomach) + 'deg)',
                transition: '0.1s transform'
            }}>
                <div className="zeman">
                    <div className="top" style={{
                        transform: 'rotate(' + (sceneDataModel.zemanPerson) + 'deg)',
                        transition: '0.1s transform'
                    }}>
                        <img className="larm" src="/assets/sprites/left_arm.png"/>
                        <img className="rarm" src="/assets/sprites/left_arm.png"/>
                        <img className="body" src="/assets/sprites/body.png"/>
                        <img className="head" src="/assets/sprites/head.png" style={{
                            transform: 'rotate(' + -(sceneDataModel.zemanPerson / 3) + 'deg) translateX(-50%)',
                            transition: '0.1s transform'
                        }}/>
                    </div>
                    <div className="bottom">
                        <div className="lleg">
                            <img className="lileg" src="/assets/sprites/leg_left.png" style={{
                                transform: 'rotate(' + -(sceneDataModel.zemanPerson / 10) + 'deg)',
                                transition: '0.1s transform'
                            }}/>
                        </div>
                        <div className="rleg">
                            <img className="rileg" src="/assets/sprites/leg_right.png" style={{
                                transform: 'rotate(' + sceneDataModel.zemanPerson / 10 + 'deg)',
                                transition: '0.1s transform'
                            }}/>
                        </div>
                    </div>
                </div>
            </div>
            <p>zemanStomach = {sceneDataModel.zemanStomach}</p>
            <p>zemanPerson = {sceneDataModel.zemanPerson}</p>
            <p>alcohol = {sceneDataModel.alcohol}</p>
            <p>vomited = {sceneDataModel.vomited}</p>
            <p>score = {sceneDataModel.score}</p>
        </div>
    );
});