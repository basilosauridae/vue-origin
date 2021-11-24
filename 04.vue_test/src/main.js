import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'
import store from './store' //当文件夹下只有一个文件且名为index 可以只写文件夹的路径

Vue.config.productionTip = false 
Vue.use(vueResource)

// 创建vm
new Vue({
  el:'#app',
  render: h => h(App),
  store,
  beforeCreate(){
    Vue.prototype.$bus = this //安装全局事件总线（App和Item.vue）
  }
})
 