import * as React from 'react';
import { TEST } from '../config/constants';
import { Canvas } from '../builder/canvas/canvas';
import  store  from '../stores/todoStore';
import { ToDo } from '../observables/ToDo';
import Devtools from 'mobx-react-devtools';

export interface IContentProps {

}

export class Content extends React.Component<IContentProps, {}> {
	render() {
		return(
			<span>
			<Canvas store={store} />
			<Devtools/>
			</span>
        );
	}
}