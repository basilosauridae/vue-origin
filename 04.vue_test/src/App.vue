<template>
  <div>
    <Test></Test>
    <TestTwo></TestTwo>
  </div>
</template>

<script>
import Test from './components/Test.vue'
import TestTwo from './components/TestTwo.vue'

export default {
  name:'App',
  components:{
    Test,
    TestTwo
  }
}
</script>

<style>

</style>