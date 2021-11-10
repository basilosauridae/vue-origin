<template>
  <div class="demo">
    <h3>姓名：{{nickName}}</h3>
    <h3>性别：{{sex}}</h3>
    <button @click="sendStudentName">把学生的名字给School组件</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name:'Student',
  data() {
    return {
      nickName:'小白',
      sex:'gender'
    }
  },
  methods: {
    sendStudentName(){
      // this.$bus.$emit('hello',this.nickName) 
      pubsub.publish('hello',66)
    }
  }
}
</script>
<style scoped>
  .demo{
    background-color: pink;
    padding: 5px;
    margin-top: 30px;
  }
  
</style>