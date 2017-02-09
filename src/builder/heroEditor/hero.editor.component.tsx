import * as React from 'react';
import HeroCard from '../heroCard/hero.component';
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

		return(
			<div className={this.props.className}>
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
			</div>
		);
	}
}


const StyledHeroEditor = styled(HeroEditor)`
	background-color: #f7e0b8;
	border: 2px solid #9e8353;
	height: 240px;
	padding-left: 10px;
	box-shadow: 6px 7px 0 1px #d8d1d1;

	H2{
		margin: 10px 0;
		color: #9e8353;
	}

	input{
		width: 190px;
		height: 25px;
		border-left: none;
		border-right: none;
		border-top: none;
		border-bottom: 2px solid #9e8353;
		background-color: #fff9e8;
		padding-left: 10px;
		font-family: 'Cormorant Upright', sans-serif;
		font-size: 20px;
	}

	a{
		font-size: 1.25rem;
		color: #9e8353;
		text-decoration: none;
		position: absolute;
		bottom: 10px;
	}
`;

export default StyledHeroEditor;