<template>
  <div class="demo">
    <h3>工作室名：{{name}}</h3>
    <h3>所在城市：{{address}}</h3>
    <button @click="sendStudioName">把工作室的名字传递给父组件</button>
  </div>
</template>

<script>
export default {
  name:'Studio',
  props:['getStudiolName'],
  data() {
    return {
      name:'网易云🌋',
      address:'上海市'
    }
  },
   methods: {
    sendStudioName(){
      this.getStudiolName(this.name)
    }
  }
}
</script>
<style scoped>
  .demo{
    background-color: #e01730;
    padding: 5px;
  }
</style>
