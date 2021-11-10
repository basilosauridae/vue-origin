<template>
  <div class="demo">
    <h3>名称：{{name}}</h3>
    <h3 class="add">地址：{{address}}</h3>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name:'School',
  data() {
    return {
      name:'网易1912街',
      address:'上海'
    }
  },
  mounted() {
    // this.$bus.$on('hello',(data)=>{
    //   console.log('我是School组件，我收到了数据',data)
    // })
    this.pubId = pubsub.subscribe('hello',(msgName,data) => {
      // 若此时不写箭头函数 打印this指向pubsub库 undefined 
       console.log('有人发布了hello消息,hello消息的回调执行了',msgName,data)
    })
  },
  beforeDestroy() {
    // this.$bus.$off('hello') //此组件销毁之前解绑bus上的hello事件 
      pubsub.unsubscribe(this.pubId) //和定时器的机制类似 一次发布订阅都是新的 所以销毁时要用定义的pubId接收

  },
}
</script>
<style scoped>
  .demo{
    background-color: skyblue;
    padding: 5px;
  }
</style>
