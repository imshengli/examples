const {
  SyncHook
} = require('tapable');

// 1. 深刻理解这个东西是干什么的？
// 2. 明白这个东西是怎么用的？可以在什么场景下使用？没有这个东西是如何做的？
// 3. 这个东西怎么设计的？
// 3.1 事前，自己想想如何设计；
// 3.2 看看作者是如何设计的；
// 3.3 思考和作者的差异；

// 1. tapable: create hooks for plugins
// 1.1 深度应用于 webpack plugin，那可以写一个webpack的plugin了解 hooks


const plugin1 = (newSpeed, callback) => {
  console.log(`Accelerate to ${newSpeed}`);
  callback();
};
const plugin2 = newSpeed => {
  console.log(`Accelerate2 to ${newSpeed}`);
};

class Car {
  constructor() {
    this.hooks = {
      //
      accelerate: new SyncHook(['newSpeed']),
    };
  }
  setSpeed(newSpeed) {
    this.hooks.accelerate.callAsync(newSpeed, () => {
      console.log('end');
    });
    // plugin1(newSpeed);
    // plugin2(newSpeed);
  }
}

const car = new Car();
car.hooks.accelerate.tap('LoggerPlugin', (args) => {
  console.log(args);
});
car.hooks.accelerate.tap('LoggerPlugin2', plugin2);
car.setSpeed(10);
