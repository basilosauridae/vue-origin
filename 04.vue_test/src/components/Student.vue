<template>
  <div class="demo">
    <h3>姓名：{{nickName}}</h3>
    <h3>性别：{{sex}}</h3>
  </div>
</template>

<script>
export default {
  name:'Student',
  data() {
    return {
      nickName:'小黄',
      sex:'gender'
    }
  }

}
</script>
// 若不写lang,则默认lang="css"
<style scoped>
  .demo{
    background-color: skyblue;
  }
  
</style>