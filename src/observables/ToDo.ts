import { computed , observable } from "mobx";

export class ToDo {

    @observable public value :string;
    @observable public id : any;
    @observable public complete: boolean;

    public constructor (value: string){
        this.value = value;
        this.id = Date.now();
        this.complete = false;
    }
}