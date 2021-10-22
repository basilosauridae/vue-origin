<template>
  <div>
    <Student name="张三" sex="man" :age="23"/>
    <!-- :age="表达式"，如果不是表达式 页面会显示为231 -->
  </div>
</template>

<script>
import Student from './components/Student.vue'
export default {
  name:'App',
  components:{
    Student
  }
}
</script>

<style>

</style>