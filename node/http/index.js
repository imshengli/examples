const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer();

server.on('connection', (args) => {
  console.log('connection');
});

server.on('request', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  // console.log(server);
  console.log(`Server running at http://${hostname}:${port}/`);
});
