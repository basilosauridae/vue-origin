<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">
        <!-- 跳转路由并携带query参数的写法 to字符串的写法 -->
        <!-- <router-link :to="`/home/message/detail?id=${item.id}&title=${item.msg}`">
          {{item.msg}}
        </router-link>  -->
        <!-- 跳转路由并携带query参数的写法 to的对象写法 path:'/home/message/detail',-->
        <router-link :to="{
          name:'xiangqing', //命名路由的使用
          query:{ 
            id:item.id,
            title:item.msg
          }
        }">
          {{item.msg}}
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'Message',
  data() {
    return {
      list:[
        {id:"001",msg:'message001'},
        {id:"002",msg:'message002'},
        {id:"003",msg:'message003'}
      ]
    }
  },
}
</script>
