<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽（挖个坑 等着组件的使用者进行填充） -->
    <slot name="one">
      我是默认值1 当使用者没有传递内容时 我会显示
    </slot>
    <slot name="two">我是默认值2</slot>
  </div>
</template>

<script>
export default {
  name:'Category',
  props:['title','listData']
}
</script>

<style scoped>
  .category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
  }
  h3{
    text-align: center;
    background-color: orange;
  }
  img{
    width: 100%;
  }
</style>