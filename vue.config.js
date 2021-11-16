module.exports = {
  pages:{
    index:{
      //入口
      entry:'src/main.js'
    }
  },
  // 开启代理服务器（方式一：不够灵活）
  /* devServer: {
    proxy: 'http://localhost:4000'
  } */

  /* 开启代理服务器（方式二）以下是对proxy的说明
     1.'/api'是为了项目中灵活标识 需要代理的请求 都加上它
     2.target后是被代理的原始请求地址
     3.pathRewrite的值是一个对象 确保发给服务器的地址都过滤掉'/api'这个接口，确保请求原始路径正确
     4.ws指websocket 值为true是表示支持websocket
     5.changeOrigin用于控制请求头中host的值 

     4和5不写，在vue项目中默认值为true,react项目中相反
    
  */
  devServer: {
    proxy: {
      // ’/api‘更为灵活 在需要走代理的请求地址 端口号后面添加次名称
      '/api': {
        target: '<url>',
        pathRewrite:{
          '^/api':''
        },
        ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  }
}