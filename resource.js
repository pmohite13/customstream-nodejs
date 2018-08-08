var util = require('util');
var EventEmitter = require('events').EventEmitter;

function Resource(input) {
    self = this; // as inherited from EventEmitter self will get all events and function of super class

    process.nextTick(function () {// calls with next loop of function, something like reverse of dowhile
        /* Starts: Business Logic */
        var count = 0;
        self.emit('start');
        var t = setInterval(function () {
            self.emit('data', ++count);
            if (input === count) {
                self.emit('end', count);
                clearInterval(t);
            }
        }, 10);
        /* End: Business Logic */
    })

};

util.inherits(Resource, EventEmitter);// Inheriting from EventEmitter
module.exports = Resource;// Exposing to outer world