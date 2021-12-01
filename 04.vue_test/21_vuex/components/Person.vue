<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addServer">添加服务器返回的数据</button>

    <h3>列表中第一个名字：{{firstName}}</h3>
    <ul>
      <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>

    <h3 style="color:#db5246">上方组件的数据求和为{{sum}}</h3>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
import {mapState} from 'vuex'

export default {
  name:'Person',
  data() {
    return {
      name:''
    }
  },
  computed: {
    // personList(){
    //   return this.$store.state.personList
    // },
    ...mapState('a',['sum']),
    ...mapState('b',['personList']),
    firstName(){
      return this.$store.getters['b/firstName'] //getters中的取值和其他不同
    }
  },
  methods: {
    add(){
      const obj = {
        id:nanoid(),
        name:this.name
      }
      this.$store.commit('b/ADD_PERSON',obj)
      this.name = ''
    },
    addWang(){
       const obj = {
        id:nanoid(),
        name:this.name
      }
      this.$store.dispatch('b/addWangperson',obj)
    },
    addServer(){
      this.$store.dispatch('b/addPersonServer')
    }
  },
}
</script>

<style>

</style>