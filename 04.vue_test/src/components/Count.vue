<template>
  <div>
    <h3>当前求和为{{$store.state.sum}}</h3>
    <h2>当前求和放大10倍为：{{bigSum}}</h2>
    <p>我在{{address}}吃{{food}}</p>

    <!-- 实现了组件间共享数据 -->
    <h3 style="color:#db5246">下方列表的总人数是{{personList.length}}</h3>

    <select v-model.number="num">
      <!-- :value后是表达式是 会被解析成数字处理，如果不加:就变成字符串拼接了 |  方法二直接.number -->
      <option value="1">1</option>
      <option value="2">  2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(num)">+</button>
    <button @click="decrement(num)">-</button>
    <button @click="incrementOdd(num)">当前求和为奇数再加</button>
    <button @click="incrementWait(num)">等一等再加</button>
  </div>
</template>
 
<script>
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'
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
    ...mapState(['address','food','personList']),
    /* ...mapGetters({
      bigSum:'bigSum'
    }) */
    ...mapGetters(['bigSum']) //借助mapGetters生成计算属性，从getters中读取数据，简写（数组形式）
  },
  methods: {
    // increment(){
    //   // actions中写的函数要用dispatch调用 但不涉及到逻辑和ajax可以直接用commit调用mutations
    //   // this.$store.dispatch('add',this.num)
    //   this.$store.commit('Add',this.num)
    // },
    // decrement(){
    //   // this.$store.dispatch('minus',this.num)
    //   this.$store.commit('Minus',this.num)
    // },
    // 借助mapMutations生成对应的方法 方法会调用commit去联系mutations(html中的函数要加上括号传对应的参数)
    ...mapMutations({increment:'Add',decrement:'Minus'}),//若想简写成数组 键值对数值要一致


    /* ************************************************************************************** */
  /*   incrementOdd(){
      this.$store.dispatch('odd',this.num)
    },
    incrementWait(){
      this.$store.dispatch('wait',this.num)
    }, */
    ...mapActions({incrementOdd:'odd',incrementWait:'wait'})

  },
}
</script>

<style>
  button{
    margin-left: 5px;
  }
</style>
