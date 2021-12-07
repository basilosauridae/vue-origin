// pages文件夹中存放路由组件，components文件夹存放一般组件

<template>
  <div>
    <h2>我是About内容</h2>
  </div>
</template>

<script>
export default {
  name:'About',
  // 切换组件的时候组件默认被销毁
  beforeDestroy() {
    // console.log('About组件即将被摧毁')
  },
  mounted() {
    // console.log('About组件挂载完毕了') 
  },
}
</script>

<style>

</style>