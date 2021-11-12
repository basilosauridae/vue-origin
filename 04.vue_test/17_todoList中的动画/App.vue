<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- <Top :recevice="recevice"></Top> -->
        <Top @recevice="recevice"></Top>

        <List 
          :todos="todos" 
        ></List>

        <Bottom 
          :todos="todos" 
          @checkAllToDo="checkAllToDo"
          @delAllDone = "delAllDone"
        ></Bottom>
      </div>
    </div>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
import Top from './components/Top.vue'
import Bottom from './components/Bottom.vue'
import List from './components/List.vue'


export default {
  name:'App',
  components:{
    Top,
    Bottom,
    List
  },
  data() {
    return {
      // 由于todos是其他子组件都在使用的数据，所以放在App中（状态提升）
      // todos:[]
      todos:JSON.parse(localStorage.getItem('todos')) || [] //[]为防止无值为null,Footer.vue中的null.length报错
    }
  },
  // 接收数据的组件在挂载的时候 绑定 全局事件总线
  mounted() {
    this.$bus.$on('updateTodo',this.updateTodo)

    this.pubId = pubsub.subscribe('checkTodo',this.checkTodo)
    this.pubId2 = pubsub.subscribe('delTodo',this.delTodo)
  },
  // 接收数据的组件在组件销毁之前要 解绑 全局事件总线
  beforeDestroy() {
    this.$bus.$off('updateTodo')

    pubsub.unsubscribe(this.pubId)
    pubsub.unsubscribe(this.pubId2)
  },
  methods: {
    /* 添加一个todo */
    recevice(x){
      // console.log(x,'x')//函数也可以作为一个数据父传子
      this.todos.unshift(x)
    },

    /* 勾选或取消勾选,爷传父，父再传子 */
    checkTodo(_,id){
      this.todos.forEach(item => {
        if(item.id === id) item.done = !item.done
      });
    },

    /* 删除 */
    delTodo(_,id){
      // filter方法不改变原数组 需要重新赋值 过滤不等于选中的id的组成新数组
      this.todos = this.todos.filter(item => item.id !== id)
    },

    /* 全选or取消全选 */
    checkAllToDo(done){
      this.todos.forEach((item)=>{
        item.done = done
      })
    },

    /* 清除已完成 */
    delAllDone(){
      this.todos = this.todos.filter((item)=>{
        return !item.done
      })
    },

    /* 更新一个todo */
    updateTodo(id,title){
      this.todos.forEach((todo)=>{
        if(todo.id === id) todo.title = title
      })
    }
  },
  watch:{
    /* todos(value){
      localStorage.setItem('todos',JSON.stringify(value))
    } */ //简写形式 无法监测数组中对象内部变化 需开启深度监听
   todos:{
      deep:true,
      handler(value){
        localStorage.setItem('todos',JSON.stringify(value))
      }
   }
  }
}
</script>

<style>
  body{
    background-color: #fff;
  }
  .btn{
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }
  .btn-danger{
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }
  .btn-edit{
    background-color: skyblue;
    color: #fff;
    border: 1px solid rgb(13, 181, 248);
    margin-right: 5px;
  }
  .btn-danger:hover{
    color: #fff;
    background-color: #bd362f;
  }
  .btn:focus{
    outline: none;
  }
  .todo-container{
    width: 600px;
    margin:0 auto
  }
  .todo-container .todo-wrap{
    padding: 10px;
    border:1px solid #ddd;
    border-radius: 5px;
  }
</style>