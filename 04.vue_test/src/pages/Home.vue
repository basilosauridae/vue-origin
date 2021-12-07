<template>
  <div>
    <h2>我是Home内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link to="/home/news" class="list-group-item" active-class="active" >News</router-link>
        </li>
        <li>
          <router-link to="/home/message" class="list-group-item" active-class="active">Message</router-link>
        </li>
      </ul>
      
      <!-- 缓存路由组件 保持活性,include属性指定保持缓存组件的名字,缓存多个指定组件:include="['News','Message']" -->
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name:'Home',
  mounted() {
    // console.log('Home组件挂载完毕',this) 
  },
}
</script>

<style>

</style>