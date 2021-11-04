<template>
  <div class="demo">
    <h3>名称：{{name}}</h3>
    <h3 class="add">地址：{{address}}</h3>
  </div>
</template>

<script>
export default {
  name:'School',
  data() {
    return {
      name:'网易1912街',
      address:'上海'
    }
  }

}
</script>
<style scoped>
  .demo{
    background-color: palevioletred;
    /* .add{
      font-size: 20px;
    } */
  }
</style>
