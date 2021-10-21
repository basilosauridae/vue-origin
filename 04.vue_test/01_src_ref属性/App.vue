<template>
  <div>
    <h1 v-text="msg" ref="title" id="origin"></h1>
    <button @click="showDOM">点我输出上方的DOM元素</button>
    <School ref="sch"/>
  </div>
</template>

<script>
import School from './components/School.vue'
export default {
  name:'App',
  data(){
    return{
      msg:'小白开学了！'
    }
  },
  components:{
    School
  },
  methods: {
    showDOM(){
      console.log(document.getElementById('origin')) //原生方法获取页面DOM元素
      console.log( this.$refs.title ) //vue中提供的ref方法获取DOM元素
      console.log(this.$refs.sch,'this.$refs.sch')//School组件的实例对象（vc）
    }
  },
}
</script>

<style>

</style>