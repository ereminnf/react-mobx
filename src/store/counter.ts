import { autorun, computed, configure, makeAutoObservable, makeObservable, observable, when } from "mobx"

class Counter {
    @observable count = 0
    @observable timer = 60

    constructor() {
        makeAutoObservable(this)

        when(
            () => this.count > 2,
            () => alert('> 2')
        )

        autorun(() => {
            console.log(this.count)
        }, {
            name: 'autorun count',
            delay: 1000
        })
    }

    inc() {
        this.count = this.count + 1
    }

    dec() {
        this.count = this.count - 1
    }

    @computed get total() {
        return `Total = ${this.timer + this.count}`
    }
}

export default new Counter()