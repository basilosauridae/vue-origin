// 该文件用于创建Vex中最为核心的store

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 准备state 用于存储数据
const state = {}

// 准备mutations 用于操作state中的数据
const mutations = {}

// 准备actions 用于响应组件中的动作
const actions = {}


// 创建并暴露导出store
export default new Vuex.Store({
  state,
  mutations,
  actions
})