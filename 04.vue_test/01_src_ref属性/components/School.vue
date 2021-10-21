<template>
  <div class="container">
    <h2>名称：{{name}}</h2>
    <h2>地址：{{address}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name:'家里蹲',
      address:'家里'
    }
  },
}
</script>

<style>
  .container{
    background-color: palevioletred;
  }
</style>