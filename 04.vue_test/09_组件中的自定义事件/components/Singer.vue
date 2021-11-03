<template>
  <div class="demo">
    <h3>音乐制作：{{nickName}}</h3>
    <h3>所属专辑：{{authorities}}</h3>
    <button @click="sendSinger">点击将音乐人传递给父组件</button>
    <button @click="unbind">解绑nima事件</button>
    <button @click="death">销毁当前Student组件的实例</button>
  </div>
</template>

<script>
export default {
  name:'Singer',
  data() {
    return {
      nickName:'小黄👱‍♂️',
      authorities:'夏日企划室'
    }
  },
  methods: {
    sendSinger(){
      // 触发Singer组件 实例身上的 aro事件
      this.$emit('nima',this.nickName,666,'多个参数也能传值')
    },
    unbind(){
      // this.$off('nima') //只适用于解绑单个事件
      // this.$off(['nima1','nima2'])//解绑多个事件 把多个事件放在数组里

      this.$off() //解绑所有的自定义事件
    },
    death(){
      this.$destroy()//销毁当前Student组件的实例，销毁后所有组件实例的自定义事件都失效
    }
  },
}
</script>
<style scoped>
  .demo{
    color: yellow;
  }
  
</style>