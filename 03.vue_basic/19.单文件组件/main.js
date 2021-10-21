import App from './App.vue'

new Vue({
  el:'#root',
  // components:{App},
  // template:`
  // <h1>你好哇</h1>
  // `
  render:q=>q('h1','你好哇')
})
/* 
  关于不同版本的Vue:
  1.vue.js与vue.runtime.xxx.js的区别：
    （1）vue.js是完整版的Vue,包含核心功能+模板解析器
    （2）vue.runtime.xxx.js是运行版的Vue,只包含：核心功能，没有模板解析器

  2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，
    需使用render函数接收到的createElement函数去指定具体内容
 */  

/* 
  vue.config.js配置文件
  1.使用vue.inspect > output.js可以查看到vue脚手架的默认配置项
  2.使用vue.config.js可对脚手架进行个性化定制 详见：https://cli.vuejs.org/zh/config/#vue-config-js
 */