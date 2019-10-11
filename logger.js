let url = "http://myLogger.io/log";
const EventEmetter = require('events');

class Logger extends EventEmetter {
    constructor() {
        super()

    }
    log = (message) => {
        //send an message
        // console.log(message);

        this.emit('logging', {
            data: message
        })


    }
    message = () => {
        this.emit('messagelogged', {
            _id: 45,
            url: url
        })
    }

}
module.exports = Logger