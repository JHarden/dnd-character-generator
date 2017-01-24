import * as React from 'react';
import { TEST } from '../../config/constants';
import { observer } from 'mobx-react';

export interface ICanvasProps {
	store: any,
}

@observer
export class Canvas extends React.Component<ICanvasProps, {}> {


	private filter(event: any){

		this.props.store.filter = event.target.value;

	}

	private createNew(event: any){
		if(event.which === 13){
			this.props.store.createTodo(event.target.value);
		}
	}

	render() {

		const { filter, filteredTodos, todos } = this.props.store;
		const todoLis = filteredTodos.map( (todo:string, index:number) =>(
			<li key={index}>{todo}</li>
		));
		return <span>
			<h1>Canvas :D ! testing TODOS</h1>
			<ul>
				{ todoLis }
			</ul>
			<ul> { filter } </ul>
			<div className="col-12">
				<h2>Create a TODO</h2>
				<input className="create" onKeyPress={this.createNew.bind(this)} />
			</div>
			<div className="col-12">
				<h2>Filter the TODOs</h2>
				<input className="filter" value={filter} onChange={this.filter.bind(this)} />
			</div>
			</span>;
	}
}