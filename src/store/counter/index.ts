import { autorun, computed, configure, makeAutoObservable, makeObservable, observable, spy, when } from "mobx"

class CounterStore {
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

        // spy((e) => {
        //     console.log(e);
        // })
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

export default CounterStore