const path = require('path')
module.exports = {
  // 设置别名
  configureWebpack: {
    resolve: {
      alias: {
        'assets': path.resolve('./src/assets'),
        'components': path.resolve('./src/components'),
        'element': path.resolve('./src/element'),
        'views': path.resolve('./src/views'),
        'network': path.resolve('./src/network'),
      }
    }
  },
  // 修改本地服务器公网ip地址
  devServer: {
    public: '192.168.5.7:8080'
  },
  // 设置icon图标
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  }
}