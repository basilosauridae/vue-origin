import axios from 'axios'
import { nanoid } from 'nanoid'
// 人员管理相关的配置
export default {
  namespaced: true,
  state: {
    personList: [
      { id: '001', name: 'Jerry' }
    ]
  },
  mutations: {
    ADD_PERSON(state, value) {
      state.personList.unshift(value)
    }
  },
  actions: {
    // 只能添加姓王的人 首字母为王
    addWangperson(context, value) {
      if (value.name.indexOf('王') === 0) {
        context.commit('ADD_PERSON', value)
      } else {
        alert('添加的人必须姓王')
      }
    },
    addPersonServer(context) {
      axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
        response => {
          context.commit('ADD_PERSON', { id: nanoid(), name: response.data })
        },
        error => {
          alert(error.message)
        }
      )
    }
  },
  getters: {
    firstName(state) {
      return state.personList[0].name
    }
  }
}