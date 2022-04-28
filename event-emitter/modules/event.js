const EventEmitter = require('events')
 
// EventEmitter dan meros olish
class NewEmitter extends EventEmitter{}

// instans obyekt
const newEmitter = new NewEmitter()

newEmitter.on('hello', ()=>{
    console.log('Hello World')
})

newEmitter.emit('hello')
newEmitter.emit('hello')
newEmitter.emit('hello')


