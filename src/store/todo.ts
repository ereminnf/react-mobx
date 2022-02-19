import { action, computed, makeAutoObservable, makeObservable, observable } from "mobx"

class Counter {
    todos = [
        { id: 111, title: 'title1', complete: false },
        { id: 222, title: 'title2', complete: false },
        { id: 333, title: 'title3', complete: false }
    ]

    constructor() {
        makeAutoObservable(this, {
            todos: observable,
            add: action,
            // computed
        }, {
            deep: true
        })
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
                this.todos = [...this.todos, ...json.map(item => {
                    item.complete = false
                    return item
                })]
            });
    }
}

export default new Counter()