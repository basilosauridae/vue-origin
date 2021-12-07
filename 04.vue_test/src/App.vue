<template>
  <div>
    <div class="row">
      <Banner></Banner>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始html中利用a标签实现页面的跳转 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a>
          <a class="list-group-item" href="./home.html">Home</a> -->

          <!-- Vue中借助router-link标签实现路由的切换 -->

          <!-- path跳转 -->
          <router-link class="list-group-item" active-class="active" to="/about" replace>About</router-link>
          <!-- name命名路由跳转 针对路径长的简化 此处没必要用 -->
          <!-- <router-link class="list-group-item" active-class="active" :to="{name:'guanyu'}">About</router-link> -->

          <router-link class="list-group-item" active-class="active" to="/home" replace>Home</router-link>
          <!-- replace属性是给路由开启了替换方式 默认是push 加上此属性 浏览器前进后退栏失效 -->

        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 此处展示什么组件 看用户点击的是哪个(指定组件的呈现位置) -->
            <router-view></router-view>
          </div> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner'

export default {
  name:'App',
  components:{
    Banner
  }
}
</script>

<style>
  button{
    margin:5px
  }
</style>