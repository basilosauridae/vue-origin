<template>
  <div class="container">
    <Category title="美食" :listData="foods">
      <img src="../assets/food.jpg" slot="one">
      <a href="#" slot="two">更多美食</a>
    </Category>

    <Category title="游戏">
      <ul  slot="one">
        <li v-for="(item,index) in games" :key="index">{{item}}</li>
      </ul>
      <div slot="two" class="link">
        <a href="#" >单机游戏</a>
        <a href="#">网络游戏</a>
      </div>
    </Category>

    <Category title="电影">
      <video slot="one" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls></video>
      <!-- <template slot="two"> -->
      <!-- 以上是写法一 v-slot写法二 仅能搭配template使用 -->
      <template v-slot:two>
        <div class="link">
          <a href="#">经典</a>
          <a href="#">热门</a>
          <a href="#">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue'
export default {
  components:{
    Category
  },
  data() {
    return {
      foods:['狸猫火锅','牛弁饭','寿喜烧'],
      games:['王者荣耀','分手厨房','超级玛丽'],
      films:['千与千寻','有顶天家族','鬼灭之刃']
    }
  },
}
</script>

<style>
  .container,.link{
    display: flex;
    justify-content: space-around;
  }
  video{
    width: 100%;
  }
  h4{
    text-align: center;
  }
</style>