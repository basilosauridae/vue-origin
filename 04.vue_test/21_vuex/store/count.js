// 求和相关的配置
export default {
  namespaced: true,
  state: {
    sum: 0, //当前的和
    address: 'KFC',
    food: '鸡块',
  },
  mutations: {
    Add(state, value) {
      // console.log('mutations中被调用',state,value)
      state.sum += value
    },
    Minus(state, value) {
      state.sum -= value
    },
  },
  actions: {
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
  getters: {
    bigSum(state) {
      return state.sum * 10
    }
  }
}