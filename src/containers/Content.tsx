import * as React from "react";
import { TEST } from '../config/constants';
import { About } from '../components/About';
import { Work } from '../components/Work';
import { Life } from '../components/Life';

export interface IContentProps {

}

export class Content extends React.Component<IContentProps, {}> {
	render() {
		return(
            <About compiler="Typescript" framework="react"></About>
        );
	}
}