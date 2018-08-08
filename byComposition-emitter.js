var EventEmitter = require('events').EventEmitter;


var getResource = function (input) {

    var self = new EventEmitter(); // new-ing of EventEmitter (Composition)

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
    return (self); // returning object before calling 'on' function and so we have used process.nexttick

};
var r = getResource(7);

r.on('start', function () {
    console.log('Started...')
})

r.on('data', function (d) {
    console.log('Data -> ', d)
})

r.on('end', function () {
    console.log('End');
})