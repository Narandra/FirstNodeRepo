const EventEmitter = require('events');
const url = "https://google.com";

class EventLogger extends EventEmitter{
    log(eventType, arg){
        this.emit(eventType, arg);
    }

    logWOArg(eventType){
        this.emit(eventType);
    }
}

module.exports.EL = EventLogger;
module.exports.url = url;