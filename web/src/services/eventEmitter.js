import { EventEmitter } from "events"

class Client {
    constructor() {
        this.eventEmitter = new EventEmitter()
    }

    on(eventName, listener) {
        this.eventEmitter.on(eventName, listener)
    }

    removeEventListener(eventName, listener) {
        this.eventEmitter.removeListener(eventName, listener)
    }

    emit(event, payload, error = false) {
        this.eventEmitter.emit(event, payload, error)
    }

    once(eventName, cb) {
        this.eventEmitter.once(eventName, cb)
    }

    getEventEmitter() {
        return this.eventEmitter
    }
}

export default new Client()
