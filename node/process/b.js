const fs = require('fs');

fs.open('/Users/shengli/shengli/study/test/node/process/t.txt', 'w', function(err, fd) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(fd);
  while(true) {
    fs.write(fd, process.pid, function() {});
  }
});
