import * as React from 'react';
import { TEST } from '../../config/constants';
import { observer } from 'mobx-react';
import { ToDo } from '../../observables/ToDo';

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

	private toggleComple(todo: ToDo){

		this.props.store.toggleComplete(todo);
	}

	render() {

		const { clearComplete, filter, filteredTodos, todos } = this.props.store;
		const todoLis = filteredTodos.map( (todo:ToDo, index:number) =>(
			<li key={todo.id}>{todo.value}
			<input type="checkbox" onChange={this.toggleComple.bind(this, todo)} value="{todo.complete}" checked={todo.complete}/>
			</li>
		));
		return <span>
			<h1>Canvas :D ! testing TODOS</h1>
			<ul>
				{ todoLis }
			</ul>
			<ul> { filter } </ul>
			<a href="#" onClick={this.props.store.clearComplete} >Clear complete</a>
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