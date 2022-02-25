import { action, computed, makeAutoObservable, makeObservable, observable, runInAction, when } from "mobx"

class TodoStore {
    todos = [
        { id: 111, title: 'title12', complete: false },
        { id: 222, title: 'title2', complete: false },
        { id: 333, title: 'title3', complete: false }
    ]

    constructor() {
        makeAutoObservable(this, { todos: observable, add: action, /*computed*/ }, { deep: true, name: 'TodoStore' })
    }

    add(todo: typeof this.todos[0]) {
        this.todos.push(todo)
    }

    remove(id: typeof this.todos[0]['id']) {
        this.todos = this.todos.filter(todo => todo.id != id)
    }

    toggle(todo: typeof this.todos[0] /*id: typeof this.todos[0]['id']*/) {
        // this.todos = this.todos.map(todo => todo.id === id ? { ...todo, complete: !todo.complete } : todo)
        todo.complete = !todo.complete
    }

    fetch() {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then((response) => response.json())
            .then((json) => {
                // runInAction(() => {
                this.addFetch(json)
                // })
            });
    }

    @action('addFetch 123')
    addFetch(data) {
        this.todos = [...this.todos, ...data.map(item => {
            item.complete = false
            return item
        })]
    }
}

export default TodoStore