import { computed, makeAutoObservable, makeObservable } from "mobx"

class Counter {
    count = 0
    timer = 60

    constructor() {
        makeAutoObservable(this)
    }

    inc() {
        this.count = this.count + 1
    }

    dec() {
        this.count = this.count - 1
    }

    /* get */ @computed total() {
        return `Total = ${this.timer + this.count}`
    }
}

export default new Counter()