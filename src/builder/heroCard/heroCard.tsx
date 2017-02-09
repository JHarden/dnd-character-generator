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
						<li><span className='attr'>STR</span><span className='value'>{hero.str}</span></li>
						<li><span className='attr'>DEX</span><span className='value'>{hero.dex}</span></li>
						<li><span className='attr'>CON</span><span className='value'>{hero.con}</span></li>
						<li><span className='attr'>WIZ</span><span className='value'>{hero.wiz}</span></li>
						<li><span className='attr'>INT</span><span className='value'>{hero.int}</span></li>
						<li><span className='attr'>CHA</span><span className='value'>{hero.cha}</span></li>
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

	&:hover{
		transform: scale(1.1);
		box-shadow: none;
		background-color: #f7e0b8;

		h2, li{
			transition: background-color 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
			background: #fff1d9;
		}
	}

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

	.value {
		margin-left: 10px;
		font-size: 20px;
		font-weight: bold;
		color: #9e8353;
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

		li{
			background: rgb(232, 207, 163);
			width: 120px;
			margin: 3px 0;
		}
	}
`;

export default styledHeroCard;