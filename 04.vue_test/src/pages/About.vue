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
  /* 4.组件内进入守卫 通过组件内规则 进入该组件时被调用 */
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter',to,from)
    if(to.meta.isAuth){
      if(localStorage.getItem('school')==='hm'){
        next()
      }else{
        alert('学校名不对 无权限查看')
      }
    }else{
      next()
    }
  },
  /* 组件内离开守卫 通过组件内规则 离开该组件时被调用 */
  beforeRouteLeave (to, from, next) {
    console.log('beforeRouteLeave',to,from)
    next()
  }
}
</script>

<style>

</style>