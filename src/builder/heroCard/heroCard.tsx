import * as React from 'react';
import styled from 'styled-components';
import { injectGlobal } from 'styled-components';
import { Hero } from './Hero';
import { observer } from 'mobx-react';

export interface IHeroCardProps {
	hero: Hero;
	children?: React.ReactChild;
	className?: string;
}

class HeroCard extends React.Component<IHeroCardProps, {}> {
	render() {
		const hero = this.props.hero;
		return (
			<div className={this.props.className}>
				<div className='title-card'>
					<h2>{hero.name}</h2>
				</div>
				<div className='hp-card'>
					<span className='health-bar'>
						{hero.hitpoints}
					</span>
				</div>
				<div className='stat-card'>
					<ul>
						<li><span>STR</span>{hero.str}</li>
						<li><span>DEX</span>{hero.dex}</li>
						<li><span>CON</span>{hero.con}</li>
						<li><span>WIZ</span>{hero.wiz}</li>
						<li><span>INT</span>{hero.int}</li>
						<li><span>CHA</span>{hero.cha}</li>
					</ul>
				</div>
			</div>
		);
	}
}

const styledHeroCard = styled(HeroCard)`

	background-color: #FFF;
	border: 1px solid #FF0000;
	width: 100px;
	font-family: 'Cormorant Upright', sans-serif;

	.hp-card {
		padding: 5px;

		.health-bar {
			background: #ff0000;
			max-width: 100%;
			display: block;
			color: #FFF;
			border-radius: 5px;
		}
	}

	ul{
		list-style: none;
    	padding-left: 0;
	}

`;

export default styledHeroCard;