<template>
  <div class="app">
    <h1>{{msg}}</h1>

    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <Studio :getStudiolName="getStudiolName"/>

    <!-- 传统父传子：通过父组件给子组件绑定一个自定义事件实现 -->
    <Singer @nima="demo" @click.native="origin"/>

    <!-- ref是方法三，灵活性强，需求是过一段时间再触发自定义事件  -->
    <!-- <Singer ref="singer"/> -->
  </div>
</template>

<script>
import Singer from './components/Singer.vue'
import Studio from './components/Studio.vue'

export default {
  name:'App',
  data() {
    return {
      msg:'Netease Cloud'
    }  
  },
  methods: {
    getStudiolName(name){
      console.log('App收到了工作室的名称',name)
    },
    demo(name,...params){
      console.log('App收到音乐人的名字',name,params)
    },
    origin(){
      alert('添加native触发组件的原生事件')
    }
  },
  mounted() {
    /* 像有延时获取需求的可以结合$refs和$on */
    // setTimeout(()=>{
    //   this.$refs.singer.$on('nima',this.getStudiolName)
    // },3000)

    /* 自定义事件触发一次就不触发了 */
    // this.$refs.singer.$once('nima',this.getStudiolName)
  },
  components:{
    Singer,
    Studio
  }
}
</script>

<style>
  .app{
    color: #fff;
    width: 650px;
    padding: 10px;
    text-align: center;
    background-color: #2e2b2a;
  }
</style>