<template>
  <div class="container">
    <!-- App组件是Category组件的使用者 -->
    <Category title="游戏">
      <template scope="obj">
        <ul>
          <li v-for="(item,index) in obj.games" :key="index">{{item}}</li>
        </ul>
      </template>
    </Category>

    <!-- 以下是解构赋值的写法 ES6中的语法 -->
    <Category>
      <template scope="{games}">
        <ol>
          <li v-for="(g,index) in games" :key="index">{{g}}</li>
        </ol>
      </template>
    </Category>

    <!-- template中的另一种写法 -->
    <Category>
      <template slot-scope="{games}">
        <h4 v-for="(g,index) in games" :key="index">{{g}}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue'
export default {
  components:{
    Category
  }
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