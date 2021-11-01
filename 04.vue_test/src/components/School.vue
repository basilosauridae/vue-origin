<template>
  <div class="demo">
    <h3>名称：{{name}}</h3>
    <h3>地址：{{address}}</h3>
    <button @click="sendSchoolName">把此组件的名字传递给父组件</button>
  </div>
</template>

<script>
export default {
  name:'School',
  props:['getSchoolName'],
  data() {
    return {
      name:'🌈',
      address:'网易云'
    }
  },
   methods: {
    sendSchoolName(){
      this.getSchoolName(this.name)
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
