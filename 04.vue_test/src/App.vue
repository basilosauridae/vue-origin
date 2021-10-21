<template>
  <div>
    <h1 v-text="msg" ref="title" id="origin"></h1>
    <button @click="showDOM">点我输出上方的DOM元素</button>
    <Student />
  </div>
</template>

<script>
import Student from './components/Student.vue'
export default {
  name:'App',
  data(){
    return{
      msg:'小白开学了！'
    }
  },
  components:{
    Student
  }
}
</script>

<style>

</style>