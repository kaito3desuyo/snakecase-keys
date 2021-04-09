const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const BabelEnginePlugin = require('babel-engine-plugin')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: [{ loader: 'babel-loader' }],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'snakecase-keys',
    libraryTarget: 'umd',
    libraryExport: 'default',
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  plugins: [
    new CopyPlugin([
      {
        from: './index.d.ts',
        to: './index.d.ts'
      }
    ]),
    new BabelEnginePlugin()
  ]
}
