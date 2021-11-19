<template>
  <div class="container">
    <Category title="美食" :listData="foods">
      <img src="../assets/food.jpg" alt="">
    </Category>

    <Category title="游戏">
      <ul>
        <li v-for="(item,index) in games" :key="index">{{item}}</li>
      </ul>
    </Category>

    <Category title="电影">
      <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls></video>
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
  .container{
    display: flex;
    justify-content: space-around;
  }
  video{
    width: 100%;
  }
</style>