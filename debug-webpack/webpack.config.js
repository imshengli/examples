const path = require('path');
const TestPlugin = require('./test-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname + '/src/index.js'),
  },
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },
  plugins:[
    new TestPlugin(),
  ],
};
