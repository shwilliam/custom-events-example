const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  output: {
    path: path.resolve(__dirname, 'docs'),
  },
  plugins: [new CopyWebpackPlugin([{from: 'src/index.html'}])],
}
