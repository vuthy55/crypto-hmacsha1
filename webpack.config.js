const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.js',
  },
  output: {
    library: 'crypto-hmacsha1',
    libraryTarget: 'umd',
    filename: 'index.js',
    globalObject: "this",
    path: path.resolve(__dirname, 'umd'),
  },
}
