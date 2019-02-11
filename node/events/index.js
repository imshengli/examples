const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', (a) => {
  console.log('an event occured.', a);
  console.log(myEmitter);
});

myEmitter.emit('event', 'eventName');
