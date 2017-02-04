import * as React from 'react';
import { TEST } from '../config/constants';
import CharGen from '../builder/canvas/charGen';
import  heroStore  from '../stores/heroStore';
import Devtools from 'mobx-react-devtools';
import styled from "styled-components";
import { injectGlobal } from 'styled-components'

export interface IContentProps {
	
}


export class Content extends React.Component<IContentProps, {}> {
	render() {
		return(
			<span>
			<CharGen store={heroStore} />
			<Devtools/>
			</span>
        );
	}
}