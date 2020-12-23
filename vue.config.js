const path = require('path')
module.exports={
  configureWebpack:{
    resolve:{
      alias:{
        'assets':path.resolve('./src/assets'),
        'components':path.resolve('./src/components'),
        'element':path.resolve('./src/element'),
        'views':path.resolve('./src/views'),
        'network':path.resolve('./src/network'),
      }
    }
},
devServer:{
  public:'118.250.68.129:8080'
},
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