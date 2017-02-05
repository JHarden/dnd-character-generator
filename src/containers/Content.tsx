import * as React from 'react';
import CharacterSheet from '../builder/characterSheet/CharacterSheet';
import HeroEditor from '../builder/HeroEditor/HeroEditor';
import heroStore from '../builder/heroCard/heroStore';
import Devtools from 'mobx-react-devtools';

export interface IContentProps {

}

export class Content extends React.Component<IContentProps, {}> {

	render() {

		return (
			<span>
				<CharacterSheet store={heroStore} />
				<HeroEditor store={heroStore} />
				<Devtools />
			</span>
		);
	}
}