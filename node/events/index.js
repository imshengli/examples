/**
 * Node 事件监听
 * 1. 默认同步执行，如何实现的同步的执行；
 * 2. 事件监听器数组，起到的作用；
 * 3. 添加事件监听
 * 4. 自行实现：https://segmentfault.com/a/1190000015762318
 */

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('newListener', (eventName, listener) => {
  console.log(eventName, 'A');
  // myEmitter.on('event', () => {
  //   console.log('A');
  // });
});
myEmitter.on('newListener', (eventName, listener) => {
  console.log(eventName, 'B');
  myEmitter.on('event', () => {
    console.log('B');
  });
});
myEmitter.on('removeListener', (eventName) => {
  console.log('removeListener', eventName);
});

// myEmitter.setMaxListeners(20);
myEmitter.on('event', (a) => {
  console.log('an event occured.', a);
  console.log(myEmitter);
});

myEmitter.on('event', (a) => {
  console.log('an event occured.', a);
  console.log(myEmitter);
});

myEmitter.emit('event', 'eventName');
