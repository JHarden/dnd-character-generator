import * as React from "react";
import { TEST } from '../config/constants';

export interface ILifeProps {}

export class Life extends React.Component<ILifeProps, {}> {
	render() {
		return <h1>Life!</h1>;
	}
}