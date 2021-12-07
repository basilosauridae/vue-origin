<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">
        <!-- 1.跳转路由并携带query参数的写法 to字符串的写法 -->
        <!-- <router-link :to="`/home/message/detail?id=${item.id}&title=${item.msg}`">
          {{item.msg}}
        </router-link>  -->

  
        <!-- 1.跳转路由并携带query参数的写法 to的对象写法 path:'/home/message/detail',
        <router-link :to="{
          path:'/home/message/detail', 
          query:{ 
            id:item.id,
            title:item.msg
          }
        } </router-link>  -->


        <!-- <router-link :to="{
          name:'xiangqing', //2.命名路由的使用
          query:{ 
            id:item.id,
            title:item.msg
          }
        }"> 
          {{item.msg}}
        </router-link> -->
        <button @click="pushShow(item)">push查看</button>
        <button @click="replaceShow(item)">replace查看</button>
        <!-- 3.路由跳转携带params参数的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail/${item.id}/${item.msg}`">
          {{item.msg}}
        </router-link>  -->

        <!-- 3.路由跳转携带params参数的对象写法 注意 里面是不能写path项的 -->
        <!-- <router-link :to="{
          name:'xiangqing',
          params:{
            id:item.id,
            title:item.msg
          }
        }">
          {{item.msg}}
        </router-link> -->
      </li>
    </ul>
    <hr>
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
  beforeDestroy() {
    console.log('Message组件即将被销毁')
  },
  // 点击两个不同按钮 最后查看地址栏回退步骤比较push和replace的不同
  methods: {
    pushShow(item){
      this.$router.push({
        name:'xiangqing', //2.命名路由的使用
        query:{ 
          id:item.id,
          title:item.msg
        }
      })
    },
    replaceShow(item){
      this.$router.replace({
        name:'xiangqing', 
        query:{ 
          id:item.id,
          title:item.msg
        }
      })
    }
  },
}
</script>
