<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
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
    personList(){
      return this.$store.state.personList
    },
    ...mapState(['sum'])
  },
  methods: {
    add(){
      const obj = {
        id:nanoid(),
        name:this.name
      }
      this.$store.commit('ADD_PERSON',obj)
      this.name = ''
    }
  },
}
</script>

<style>

</style>