import * as React from "react";
import { TEST } from '../config/constants';

export interface IWorkProps {}

export class Work extends React.Component<IWorkProps, {}> {
	render() {
		return <h1>Work!!</h1>;
	}
}