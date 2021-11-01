<template>
  <div class="app">
    <h1>{{msg}}</h1>

    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName"/>
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
      msg:'Netease Cloud'
    }
  },
  methods: {
    getSchoolName(name){
      console.log('App收到了School的name',name)
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
    width: 600px;
    color: #fff;
    padding: 10px;
    text-align: center;
    background-color: #2e2b2a;
  }
</style>