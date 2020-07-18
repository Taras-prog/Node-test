const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('anything', data => {
    console.log('ON: anything', data)
})

emitter.emit('anything', {a: 12})
emitter.emit('anything', {a: 13})

setTimeout(() => {
    emitter.emit('anything', {a: 14})
}, 5000)

class Dispatch extends EventEmitter {
    subscribe(eventName, cb) {
        console.log('[Subscribe...]');
        this.on(eventName, cb)
    }
    dispatch(eventName, data) {
        console.log('[Dispatching...]');
        this.emit(eventName, data)
    }
}

const dis = new Dispatch()

dis.subscribe('Taras', data => {
    console.log('ON: Taras', data);
})

dis.dispatch('Taras', {Taras: 25})