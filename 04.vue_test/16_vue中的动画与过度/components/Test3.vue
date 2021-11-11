// vue中过渡的使用
<template>
  <div>
    <button @click="isShow = !isShow" >显示/隐藏</button>
    
    <transition-group
      appear
      class="animate__animated animate__bounce"
      enter-active-class="animate__flip"
      leave-active-class="animate__hinge"
    >
      <h1 v-show="isShow" key="1">🎃😶🙄🥴🤨🎃</h1>
      <h1 v-show="isShow" key="2">🎃😶🙄🥴🤨🎃</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name:'TEST3',
  data() {
    return {
      isShow:true
    }
  }
}
</script>

<style scoped>
  h1{
    background-color: rgb(241, 239, 99);
    width: 300px;
  }
</style>