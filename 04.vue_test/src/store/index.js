// 该文件用于创建Vex中最为核心的store

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 求和相关的配置
const countOptions = {
  namespaced:true,
  state:{
    sum: 0, //当前的和
    address: 'KFC',
    food: '鸡块',
  },
  mutations:{
    Add(state, value) {
      // console.log('mutations中被调用',state,value)
      state.sum += value
    },
    Minus(state, value) {
      state.sum -= value
    },
  },
  actions:{
    odd(context, value) {
      // console.log('odd',context,value)
      if (context.state.sum % 2) {
        context.commit('Add', value)
      }
    },
    wait(context, value) {
      setTimeout(() => {
        context.commit('Add', value)
      }, 5000)
    }
  },
  getters:{
    bigSum(state) {
      return state.sum * 10
    }
  }
}

// 人员管理相关的配置
const personOptions = {
  namespaced: true,
  state:{
    personList: [
      { id: '001', name: 'Jerry' }
    ]
  },
  mutations:{
    ADD_PERSON(state, value) {
      state.personList.unshift(value)
    }
  },
  actions:{
    
  }
}


// 创建并暴露导出store
export default new Vuex.Store({
  modules:{
    a:countOptions,
    b:personOptions
  }
})