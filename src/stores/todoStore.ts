import { computed , observable } from 'mobx';
import { ToDo } from '../observables/ToDo';


class TodoStore{

    @observable todos: any = [];
    @observable filter = "";
    @computed get filteredTodos(){
        let matchesFilter = new RegExp(this.filter, "i");
        return this.todos.filter((todo: ToDo) => !this.filter || matchesFilter.test(todo.value));
    };

    public createTodo(value: string){
        this.todos.push(new ToDo(value));
    };

    public clearComplete = () => {
        const incompleteTodos = this.todos.filter((todo: ToDo) => !todo.complete);
        this.todos.replace(incompleteTodos);
    }
}

var store = new TodoStore;
export default new TodoStore;