var Resource = require('./resource');

var r = new Resource(7);

r.on('start', function () {
    console.log('Started...')
})

r.on('data', function (d) {
    console.log('Data -> ', d)
})

r.on('end', function () {
    console.log('End');
})