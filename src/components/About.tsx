import * as React from "react";
import { TEST } from '../config/constants';

export interface HelloProps { compiler: string; framework: string; }

export class About extends React.Component<HelloProps, {}> {
	render() {
		return <h1>Hello from {this.props.compiler} and {this.props.framework}! with constant: {TEST}</h1>;
	}
}