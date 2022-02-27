const STATE = Object.freeze({
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected',
})

class MyPromise {
    constructor(execute) {
        this.status = STATE.PENDING

        execute()
    }
}