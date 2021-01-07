const path = require('path')
module.exports = {
  configureWebpack: config => {
    // 配置组件地址别名
    config.resolve.alias['~'] = path.resolve(__dirname, 'src/components')

    // 输出文件命名规则
    config.output.filename = 'js/[name]-[hash:8].js'
    // import(/* webpackChunkName: "name" */ 'src')后产生的模块包命名规则
    config.output.chunkFilename = 'js/[name]-[chunkHash:8].js'
    // 除了生产环境都启用sourceMap
    config.devtool = process.env.NODE_ENV === 'production' ? '' : 'source-map'
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '新闻发布系统'
      return args
    })
  },
  // 关闭生产环境sourceMap，构建加速
  productionSourceMap: false,
  // 是否提取css，相当于extractTextPlugin插件
  css: {
    extract: true,
    sourceMap: process.env.NODE_ENV !== 'production'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    open: true,
    compress: true,
    port: 8088,
    proxy: {
      '/api': {
        target: 'localhost:3000',
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
}