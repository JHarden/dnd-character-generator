import * as React from 'react';
import HeroCard from '../heroCard/heroCard';
import { observer } from 'mobx-react';
import { Hero } from '../heroCard/Hero';
import styled from 'styled-components';


export interface ICharacterSheet {

	children?: React.ReactChild;
	className?: string;
	store: any;
}

@observer
class CharacterSheet extends React.Component<ICharacterSheet, {}> {

	render() {

		const { filteredHeroes } = this.props.store;
		const heroes = filteredHeroes.map((localHero: Hero, index: number) => (

			<HeroCard key={index} hero={localHero} />
		));

		return (
			<div className={this.props.className}>
				<div className='character-sheet-header'>
					<h2>Your Party</h2>
				</div>
				<div className='character-list'>
					{heroes}
				</div>
			</div>
		);
	}
}


const StyledCharacterSheet = styled(CharacterSheet)`

	.character-list{
		display: flex;
		border: 1px solid blue;
		flex-direction: row;
		justify-content: flex-start;
	}

`;

export default StyledCharacterSheet;