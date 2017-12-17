import {observable,computed} from "mobx";

export default class SceneDataModel {

    @observable zemanStomach = 0;
    @observable zemanPerson = 0;
    @observable alcohol = 0;
    @observable vomited = false;
    @observable score = 0;

}