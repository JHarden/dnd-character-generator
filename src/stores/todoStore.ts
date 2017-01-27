import { computed , observable } from 'mobx';
import { ToDo } from '../observables/ToDo';


class TodoStore{

    @observable todos: any = [];
    @observable filter = "";
    @computed get filteredTodos(){
        console.log('in filteredTodos');
        let matchesFilter = new RegExp(this.filter, "i");
        return this.todos.filter((todo: ToDo) => !this.filter || matchesFilter.test(todo.value));
    };

    public createTodo(value: string){
        let test = new ToDo("HELLO");
        console.log('test', test);
        this.todos.push(new ToDo(value));
    };
}

var store = new TodoStore;
export default new TodoStore;