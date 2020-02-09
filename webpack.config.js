const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.js'
  },
  module:{
    rules: [{
      test: /\.(jpg|png|gif)$/,
      use:{
        loader: 'url-loader',
        options: {
          // placeholder 占位符
          name: '[name]_[hash].[ext]',
          outputPath: 'images/',
          // 超过2048字节就让他发送http请求
          limit: 2048
        },
      }
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'dist')
  }
}