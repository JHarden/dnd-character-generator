import * as React from 'react';
import { TEST } from '../../config/constants';
import HeroCard from '../heroCard/heroCard';
import { observer } from 'mobx-react';
import { Hero } from '../heroCard/Hero';
import styled from 'styled-components';


export interface IHeroEditor {
	store: any;
	children?: React.ReactChild;
	className?: string;
}

@observer
class HeroEditor extends React.Component<IHeroEditor, {}> {

	private filter(event: any) {
		this.props.store.setFilter(event.target.value);

	}

	private createNew(event: any) {
		if (event.which === 13) {
			this.props.store.createHero(event.target.value);
		}
	}

	private toggleRetired(hero: Hero) {
		this.props.store.toggleComplete(hero);
	}

	render() {

		const { clearComplete, filter, heroes } = this.props.store;

		return <div className={this.props.className}>
			Hero Editor
			<section>
				<div className='control-wrap'>
					<h2>Create a Hero</h2>
					<input className='create' onKeyPress={this.createNew.bind(this)} />
				</div>
				<div className='control-wrap'>
					<h2>Filter the Heroes</h2>
					<input className='filter' value={filter} onChange={this.filter.bind(this)} />
				</div>
				<div className='control-wrap'>
					<a href='#' onClick={this.props.store.clearComplete} >Retire Selected</a>
				</div>
			</section>
		</div>;
	}
}


const StyledHeroEditor = styled(HeroEditor) `

    border: 2px solid #FF0000;

`;

export default StyledHeroEditor;