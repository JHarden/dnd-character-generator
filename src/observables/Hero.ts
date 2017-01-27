import { computed , observable } from "mobx";

export class Hero {

    @observable name: string;
    @observable id: any;
    @observable str: number;
    @observable dex: number;
    @observable con: number;
    @observable wiz: number;
    @observable int: number;
    @observable cha: number;
    @observable alive: boolean;
    @observable hitpoints: number;

    public constructor (name: string){
        this.name = name;
        this.id = Date.now();
        this.str = this.diceRoll;
        this.dex = this.diceRoll;
        this.con = this.diceRoll;
        this.wiz = this.diceRoll;
        this.int = this.diceRoll;
        this.cha = this.diceRoll;
        this.alive = true;
        this.hitpoints = this.hitPointGen;
        console.log(this.str, this.dex, this.con, this.wiz, this.int, this.cha);
    }

    private get diceRoll(): number{

        return  (Math.floor( Math.random() * 6 ) + 1) + ( Math.floor( Math.random() * 6 ) + 1) + ( Math.floor( Math.random() * 6 ) + 1);
    }

    private get hitPointGen(): number{

        return (Math.floor(Math.random() * this.con) + Math.floor(this.str / 2));
    }
}