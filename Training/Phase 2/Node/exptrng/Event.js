const EvenEmitter = require('events');

const myEmitter = new EvenEmitter();


myEmitter.on('test_event',() => {
    console.log('test event was fired ');
});

myEmitter.on('test_event',() => {
    console.log('test event was fired ');
});

myEmitter.on('test_event',() => {
    console.log('test event was fired ');
});

myEmitter.emit('test_event')