<template>
  <div>
    <h3>当前求和为{{$store.state.sum}}</h3>
    <h2>当前求和放大10倍为：{{bigSum}}</h2>
    <p>我在{{address}}吃{{food}}</p>
    <select v-model.number="num">
      <!-- :value后是表达式是 会被解析成数字处理，如果不加:就变成字符串拼接了 |  方法二直接.number -->
      <option value="1">1</option>
      <option value="2">  2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>
 
<script>
import {mapGetters, mapState} from 'vuex'
export default {
  name:'Count', 
  data() {
    return {
      num:1,//用户选择的数字 
    }
  },
  computed:{
    /* bigSum(){
      return this.$store.getters.bigSum
    }, */
    // 借助mapState生成计算属性，从state中读取数据,不隐藏的是简写形式(数组写法)
    /* ...mapState({
      address:'address',
      food:'food'
    }) */
    ...mapState(['address','food']),
    /* ...mapGetters({
      bigSum:'bigSum'
    }) */
    ...mapGetters(['bigSum']) //借助mapGetters生成计算属性，从getters中读取数据，简写（数组形式）
  },
  methods: {
    increment(){
      // actions中写的函数要用dispatch调用 但不涉及到逻辑和ajax可以直接用commit调用mutations
      // this.$store.dispatch('add',this.num)
      this.$store.commit('Add',this.num)
    },
    decrement(){
      // this.$store.dispatch('minus',this.num)
      this.$store.commit('Minus',this.num)
    },
    incrementOdd(){
      this.$store.dispatch('odd',this.num)
    },
    incrementWait(){
      this.$store.dispatch('wait',this.num)
    }
  },
}
</script>

<style>
  button{
    margin-left: 5px;
  }
</style>
