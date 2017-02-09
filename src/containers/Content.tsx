import * as React from 'react';
import CharacterSheet from '../builder/characterSheet/character.sheet.component';
import HeroEditor from '../builder/HeroEditor/hero.editor.component';
import heroStore from '../builder/heroCard/hero.store';
import Devtools from 'mobx-react-devtools';
import styled from 'styled-components';

export interface IContentProps {
	className?: string;
}

class Content extends React.Component<IContentProps, {}> {

	render() {
		return (
			<div className={this.props.className}>
				<header>
					<h1>Create Your Party</h1>
				</header>
				<aside>
					<HeroEditor store={heroStore} />
				</aside>
				<section>
					<CharacterSheet store={heroStore} />
				</section>
				<Devtools/>
			</div>
		);
	}
}

const StyledContent = styled(Content)`

	header{
		h1{
			font-family: 'Cormorant Upright', sans-serif;
			font-size: 2.5rem;
			margin: 0 0 1rem 0.5rem;
			color: #9e8353;
		}
	}

	aside{
		width: 25%;
		float: left;
		max-width: 225px;
		position: relative;
		font-family: 'Cormorant Upright', sans-serif;
		padding-left: 10px;
	}

	section{
		width: 75%;
		float:left;
	}

`;

export default StyledContent;