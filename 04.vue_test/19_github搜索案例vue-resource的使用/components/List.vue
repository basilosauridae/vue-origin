<template>
  <div class="row">
    <!-- 展示用户列表 -->
    <div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.login" >
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width:100px">
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
    <!-- 展示欢迎词 -->
    <h1 v-show="info.isFirst">欢迎使用🥴</h1> 
    <!-- 展示加载中 -->
    <h1 v-show="info.isLoading">加载中。。。🙄</h1>
    <!-- 展示错误信息 -->
    <h1 v-show="info.errMsg">{{info.errMsg}}🤐</h1>
  </div>
</template>

<script>
export default {
  name:'List',
  data() {
    return {
      info:{
        isFirst:true,//是否为初次展示
        isLoading:false,//是否处在加载中
        errMsg:'',//错误的信息
        users:[]
      }
    }
  },
  mounted() {
    this.$bus.$on('updateList',(obj)=>{
      // console.log('我是List组件，收到数据：',obj)
      // this.info = obj
      /* ...ES6中通过字面量的形式去合并对象，重复的属性名以最后赋值的为准,保证了isFirst属性不丢失 */
      this.info = {
        ...this.info,
        ...obj
      }
    })
  },
}
</script>

<style scoped>
 .ablum{
    min-height: 50rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
  }
  .card{
    float: left;
    width: 33.33%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }
  .card > img{
    margin-bottom: .75rem;
    border-radius: 100px;
  }
  .card-text{
    font-size: 85%;
  }
</style>