import { computed , observable, action, useStrict } from 'mobx';
import { ToDo } from '../observables/ToDo';
import { Hero } from '../observables/Hero';

useStrict(true);

class HeroStore{

    @observable heroes: any = [];
    @observable filter = "";
    @computed get filteredHeroes(){
        let matchesFilter = new RegExp(this.filter, "i");
        return this.heroes.filter((hero: Hero) => !this.filter || matchesFilter.test(hero.name));
    };

    @action("[[ UPDATE HERO FILTER ]]") setFilter(filter: string){
        this.filter = filter;
    }

    @action("[[ CREATE HERO ]]") createHero(name: string){
        this.heroes.push(new Hero(name));
    };

    @action("[[ REMOVE RETIRED HEROES ]]") clearComplete = () => {
        const deadHeroes = this.heroes.filter((hero: Hero) => !hero.alive);
        this.heroes.replace(deadHeroes);
    }

    @action("[[ RETIRE HEROES ]]") toggleComplete = (hero:Hero) => {
        hero.alive = !hero.alive;
    }
}

var heroStore = new HeroStore;
export default new HeroStore;