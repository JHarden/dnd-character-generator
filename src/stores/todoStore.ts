import { computed , observable, action, useStrict } from 'mobx';
import { ToDo } from '../observables/ToDo';

useStrict(true);

class TodoStore{

    @observable todos: any = [];
    @observable filter = "";
    @computed get filteredTodos(){
        let matchesFilter = new RegExp(this.filter, "i");
        return this.todos.filter((todo: ToDo) => !this.filter || matchesFilter.test(todo.value));
    };

    @action("--create todo--") createTodo(value: string){
        this.todos.push(new ToDo(value));
    };

    @action("--clear complete--") clearComplete = () => {
        const incompleteTodos = this.todos.filter((todo: ToDo) => !todo.complete);
        this.todos.replace(incompleteTodos);
    }

    @action("--toggle complete--") toggleComplete = (todo:ToDo) => {
        todo.complete = !todo.complete;
    }
}

var store = new TodoStore;
export default new TodoStore;