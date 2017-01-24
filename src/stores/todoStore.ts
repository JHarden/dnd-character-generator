import { computed , observable } from "mobx";

class TodoStore{


    @observable todos = ["buy milk", "buy eggs"];
    @observable filter = "";
    @computed get filteredTodos(){
        console.log('in filteredTodos');
        let matchesFilter = new RegExp(this.filter, "i");
        return this.todos.filter(todo => !this.filter || matchesFilter.test(todo));
    }

    createTodo(value: string){
        this.todos.push(value);
    }
}

var store = new TodoStore;
export default new TodoStore;