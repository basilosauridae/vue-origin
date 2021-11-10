<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <School/>
    <Student/>
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'

export default {
  name:'App',
  data() {
    return {
      msg:'事件总线'
    }
  },
  components:{
    School,
    Student
  }
}
</script>

<style>
  .app{
    color: #fff;
    background-color: grey;
    padding: 10px;
  }
</style>