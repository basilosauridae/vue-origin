// vue中动画的使用
<template>
  <div>
    <button @click="isShow = !isShow" >显示/隐藏</button>
    <transition appear>
      <h1 v-show="isShow">🎃😶🙄🥴🤨🎃</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name:'TEST',
  data() {
    return {
      isShow:true
    }
  }
}
</script>

<style scoped>
  h1{
    background-color: plum;
    width: 300px;
  }
  /* 页面中有多个transition标签时，v改成transition表情的name的属性值 */
  .v-enter-active{
    animation: fly 0.5s;
  }
  .v-leave-active{
    animation: fly 0.5s reverse;
  }
  @keyframes fly {
    from{
      transform: translateX(-100%);
    }
    to{
      transform: translateX(0px);
    }
  }
</style>