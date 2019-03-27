### 可执行脚本

```sh
#!/usr/bin/env node
console.log("hello");
```

`#!/usr/bin/env node`
在脚本的开发过程中，我们需要指定脚本的执行程序。
上面这句话的含义就是：使用 node 来执行我们的脚本。

`chmod 755 hello`
修改权限；对文件有读写权限；

**去除`./`方法**

原理：
一种方法是在`path`中存在`hello.sh`这个文件；
另一种方式是使用`npm link`，把 `hello` 命令链接到node安装目录的`bin`下。
再一种方式是使用`npm install -g`，可以把当前`bin`安装到全局；

**参数**

可以使用`process.argv`获取；

### 命令行开发

`npm install -g`
可以把当前`bin`安装到全局；

### NPM模块

**shelljs**
Unix shell commands for Node.js

**yargs**
更友好的处理命令行参数。

**chalk**
终端文字加颜色js组件

**commander**
CLI常用开发框架

**lnquirer**
命令行交互信息收集组件

### 参考文档

* [Node.js 命令行程序开发教程](http://www.ruanyifeng.com/blog/2015/05/command-line-with-node.html)
* [用Node.js开发一个Command Line Interface (CLI)](https://zhuanlan.zhihu.com/p/38730825)
