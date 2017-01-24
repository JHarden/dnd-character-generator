import * as React from "react";
import { TEST } from '../config/constants';
import { Canvas } from '../builder/canvas/canvas';


export interface IContentProps {

}

export class Content extends React.Component<IContentProps, {}> {
	render() {
		return(
            <Canvas/>
        );
	}
}