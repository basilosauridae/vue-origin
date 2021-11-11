// vue中过渡的使用,传统的过滤元素的样式要写全，动画不需要
<template>
  <div>
    <button @click="isShow = !isShow" >显示/隐藏</button>

    <!-- 单个元素使用transition包裹 -->
     <!-- <transition name="hello" appear>
      <h1 v-show="isShow">🎃😶🙄🥴🤨🎃</h1>
    </transition> -->
    
    <!-- 多个元素使用transition-group 且需要key值 -->
    <transition-group name="hello">
      <h1 v-show="isShow" key="1">🎃😶🙄🥴🤨🎃</h1>
      <h1 v-show="!isShow" key="2">🎃😶🙄🥴🤨🎃</h1>
    </transition-group>

  </div>
</template>

<script>
export default {
  name:'TEST2',
  data() {
    return {
      isShow:true
    }
  }
}
</script>

<style scoped>
  h1{
    background-color: skyblue;
    width: 300px;
  }
  /* 进入的起点、离开的终点 */
  .hello-enter,.hello-leave-to{
    transform: translateX(-100%);
  }
  .hello-enter-active,.hello-leave-active{
    transition: 0.5s linear;
  }
  /* 进入的重点、离开的起点 */
  .hello-enter-to,.hello-leave{
    transform: translateX(0);
  }
</style>