import * as React from "react";
import { TEST } from '../config/constants';

export interface IButtonProps {

    name: string;
	onClick() : void;
	className?: string;
	
}

export class Button extends React.Component<IButtonProps, {}> {
	render() {
		return <button className={this.props.className} onClick={this.props.onClick}>{this.props.name}</button>;
	}
}