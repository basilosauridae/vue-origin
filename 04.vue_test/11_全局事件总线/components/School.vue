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
  },
  mounted() {
    this.$bus.$on('hello',(data)=>{
      console.log('我是School组件，我收到了数据',data)
    })
  },
  beforeDestroy() {
    this.$bus.$off('hello') //此组件销毁之前解绑bus上的hello事件 
  },
}
</script>
<style scoped>
  .demo{
    background-color: skyblue;
    padding: 5px;
  }
</style>
