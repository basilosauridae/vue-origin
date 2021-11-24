<template>
  <div class="container">
    <Count></Count>
  </div>
</template>

<script>
import Count from './components/Count'

export default {
  components:{
    Count
  },
  mounted() {
    console.log(this,'this')
  },
}
</script>

<style>

</style>