// 该文件用于创建Vex中最为核心的store

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 准备state 用于存储数据
const state = {
  sum: 0 //当前的和
}

// 准备mutations 用于操作state中的数据,不要写任何业务逻辑和ajax请求
const mutations = {
  Add(state,value){
    // console.log('mutations中被调用',state,value)
    state.sum += value
  },
  Minus(state,value){
    state.sum -= value
  },
  Odd(state,value){
    console.log('Odd',state,value)
  }
}

// 准备actions 用于响应组件中的动作
const actions = {
  /* 没什么逻辑的不需要在actions中再写一次 */
  /*  add(context,value){
    console.log('actions中被调用', context, value)
    context.commit('Add',value)
  }, */
  /* minus(context,value){
    context.commit('Minus',value)
  }, */
  odd(context,value){
    // console.log('odd',context,value)
    if(context.state.sum % 2){
      context.commit('Add',value)
    }
  },
  wait(context,value){
    setTimeout(()=>{
      context.commit('Add',value)
    },5000)
  }
}


// 创建并暴露导出store
export default new Vuex.Store({
  state,
  mutations,
  actions
})