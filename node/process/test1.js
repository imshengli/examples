/**
 * Node 编写守护进程
 * @author zhangshengli@imshengli.com
 * @date 2019-03-13
 */

/**
 * Node 启动子进程，可以使用 spawn()
 */
const spawn = require('child_process').spawn;

const bProcess = spawn('node', ['b.js'], {
  detached: true,
});

console.log(process.pid, bProcess.pid);

process.exit(0);
