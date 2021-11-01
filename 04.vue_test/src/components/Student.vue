<template>
  <div class="demo">
    <h3>制作人：{{nickName}}</h3>
    <h3>工作室：{{sex}}</h3>
  </div>
</template>

<script>
export default {
  name:'Student',
  data() {
    return {
      nickName:'小黄',
      sex:'夏日企划室'
    }
  }
}
</script>
<style scoped>
  .demo{
    color: yellow;
  }
  
</style>