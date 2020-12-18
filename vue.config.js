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
}
}