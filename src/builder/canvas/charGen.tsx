import * as React from 'react';
import { TEST } from '../../config/constants';
import { observer } from 'mobx-react';
import { Hero } from '../../observables/Hero';
import styled from 'styled-components';

export interface ICharGenProps {
	store: any,
    children?: React.ReactChild,
    className?: string,
}


@observer
class CharGen extends React.Component<ICharGenProps, {}> {


	private filter(event: any){

        this.props.store.setFilter(event.target.value);

	}

	private createNew(event: any){
		if(event.which === 13){
			this.props.store.createHero(event.target.value);
		}
	} 

    private toggleRetired(hero: Hero){
		this.props.store.toggleComplete(hero);
	}

	render() {

		const { clearComplete, toggleComplete, filter, filteredHeroes, heroes } = this.props.store;
		const heroSheet = filteredHeroes.map( (hero:Hero, index:number) =>(
            <li key={hero.id}>
                <div className="hero-sheet">
                   <div className="is-alive">
                        <label htmlFor={'retire-'+index} className="retire-check-wrap">
                            <input type="checkbox" onChange={this.toggleRetired.bind(this, hero)} id={'retire-'+index} value="{hero.alive}" checked={hero.alive}/>
                            <span className="active">+</span>
                            <span className="inactive">-</span>
                        </label>
                    </div>
                    <div className="hero-header">
                     <h2>{hero.name}</h2>
                    </div>
                    <div className="hero-data">                     
                        <div className="hero-details">                   
                        <h3>HP: <span>{hero.hitpoints}</span></h3>
                        </div>
                        <div className="stats">
                            <span className="stat"><span className="stat-name">STR:</span> {hero.str}</span>
                            <span className="stat"><span className="stat-name">DEX:</span> {hero.dex}</span>
                            <span className="stat"><span className="stat-name">CON:</span> {hero.con}</span>
                            <span className="stat"><span className="stat-name">WIZ:</span> {hero.wiz}</span>
                            <span className="stat"><span className="stat-name">INT:</span> {hero.int}</span>
                            <span className="stat"><span className="stat-name">CHA:</span> {hero.cha}</span>
                        </div>                
                    </div>
                </div>
            </li>
		));

		return <div  className={this.props.className}>
                <h1>Hero Generator</h1>
                <section>
                    <ul className="hero-party">
                        { heroSheet }
                    </ul>
                </section>
                 <section>
                <ul> { filter } </ul>
                </section>
                <section>
                <div className="control-wrap">
                    <h2>Create a Hero</h2>
                    <input className="create" onKeyPress={this.createNew.bind(this)} />
                </div>
                <div className="control-wrap">
                    <h2>Filter the Heroes</h2>
                    <input className="filter" value={filter} onChange={this.filter.bind(this)} />
                </div>
                  <div className="control-wrap">
                    <a href="#" onClick={this.props.store.clearComplete} >Retire Selected</a>
                </div>
                </section>
			</div>;
	}
}


const StyledCharGen = styled(CharGen)`

    background: red;
    outline: 1px solid pink;

`;

export default StyledCharGen;