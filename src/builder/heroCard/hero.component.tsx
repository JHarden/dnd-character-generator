import * as React from 'react';
import styled from 'styled-components';
import { Hero } from './hero';
import { observer } from 'mobx-react';
import HeroStat from './hero.stat.component';

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
						<HeroStat attr={'str'} attrVal={hero.str} />
						<HeroStat attr={'dex'} attrVal={hero.dex} />
						<HeroStat attr={'con'} attrVal={hero.con} />
						<HeroStat attr={'wiz'} attrVal={hero.wiz} />
						<HeroStat attr={'int'} attrVal={hero.int} />
						<HeroStat attr={'cha'} attrVal={hero.cha} />
					</ul>
				</div>
			</div>
		);
	}
}

const styledHeroCard = styled(HeroCard)`

	background-color: #f7e0b8;
	border: 2px solid #9e8353;
	width: 130px;
	font-family: 'Cormorant Upright', sans-serif;
	box-shadow: 6px 7px 0 1px #d8d1d1;
	font-size: 20px;
	margin: 0 10px 0 0;
	height: 240px;
	transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
	cursor: pointer;

	.hp-card {
		padding: 0;
		width: 120px;
		margin-left: 5px;

		.health-bar {
			background: #ff5454;
			max-width: 100%;
			display: block;
			color: #FFF;
			padding-left: 5px;
			font-size: 20px;
		}
	}

	h2{
		width: 115px;
		background: rgb(232, 207, 163);
		padding-left: 5px;
		color: #9e8353;
		margin: 5px 5px;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	
	.stat-card{
		margin-left: 0;
	}

	ul{
		list-style: none;
		padding-left: 0;
		margin-left: 5px;
		font-size: 16px;
		font-weight: bold;
		margin: 0 0 5px 5px;
	}
`;

export default styledHeroCard;