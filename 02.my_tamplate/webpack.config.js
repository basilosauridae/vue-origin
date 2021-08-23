const path = require('path')
module.exports = {
  mode:'development',//模式开发
  entry:'./src/index.js',//入口文件
  output:{ //打包出口
    filename:'bundle.js'
  },
  // 配置webpack-dev-server
  devServer:{
    contentBase:path.join(__dirname,'assets'),//静态文件根目录
    compress:false,
    port:8080,
    publicPath:'/xuni'//虚拟打包的路径 bundle.js没有真正生成
  }
}