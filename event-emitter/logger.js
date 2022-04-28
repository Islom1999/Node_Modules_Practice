const EventEmitter = require('events')
const uuid = require('uuid')

// uuid paketdan id yaratish
// console.log(uuid.v4())
// console.log(uuid.v5)

class Logger extends EventEmitter{
    // method yaratamiz
    log(method,route){this.emit('message', {id: uuid.v4(), method: method, route,})
    }
}
module.exports = Logger



