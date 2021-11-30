// 该文件用于创建Vex中最为核心的store

import Vue from 'vue'
import Vuex from 'vuex'
import countOptions from './count'
import personOptions from './person'
Vue.use(Vuex)


// 创建并暴露导出store
export default new Vuex.Store({
  modules:{
    a:countOptions,
    b:personOptions
  }
})