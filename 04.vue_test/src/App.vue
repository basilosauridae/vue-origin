<template>
  <div class="container">
    <Count></Count>
    <hr>
    <!-- <Person></Person> -->

    <hr>
    <p class="red">红色的数据表示上下组件之间的数据通过vuex实现了共享</p>
  </div>
</template>

<script>
import Count from './components/Count'
import Person from './components/Person.vue'

export default {
  components:{
    Count,
    Person
  },
  mounted() {
    console.log(this,'this')
  },
}
</script>

<style>
.red{
  font-size: 12px;
  color: #dd4f43;
  font-weight: 700;
}
</style>