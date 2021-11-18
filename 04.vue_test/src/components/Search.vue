<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="keyWord"/> &nbsp;
        <button @click="searchUsers">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Search',
  data() {
    return {
      keyWord:''
    }
  },
  methods: {
    searchUsers(){
      // 请求前更新List数据
      this.$bus.$emit('updateList',{
        isFirst:false,
        /* 这里有个巧妙的处理方式 isFirst只使用一次 后面函数成功失败就不用写了 
           但如何保证isFirst属性一直存在 使用ES6中...语法，见兄弟组件传值
         */
        
        isLoading:true,
        errMsg:'',
        users:[]
      })
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        response => {
          console.log('请求成功了')
          this.$bus.$emit('updateList',{
            isLoading:false,
            errMsg:'',
            users:response.data.items
          })
        },
        error => {
          console.log('请求失败了',error.message)
          this.$bus.$emit('updateList',{
            isLoading:false,
            errMsg:error.message,
            users:[]
          })
        }
      )
    }
  },
}
</script>

<style>

</style>