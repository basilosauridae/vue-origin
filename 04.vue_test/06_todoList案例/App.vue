<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <Top :recevice="recevice"></Top>

        <List 
          :todos="todos" 
          :checkTodo="checkTodo" 
          :delTodo="delTodo"
        ></List>

        <Bottom 
          :todos="todos" 
          :checkAllToDo="checkAllToDo"
          :delAllDone = "delAllDone"
        ></Bottom>
      </div>
    </div>
  </div>
</template>

<script>
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
      todos:[
        {id:"001",title:"小屁兜",done:false},
        {id:"004",title:"放臭屁",done:true},
        {id:"002",title:"好几天",done:true},
        {id:"003",title:"没拉屎",done:true},
      ]
    }
  },
  methods: {
    /* 添加一个todo */
    recevice(x){
      // console.log(x,'x')//函数也可以作为一个数据父传子
      this.todos.unshift(x)
    },

    /* 勾选或取消勾选,爷传父，父再传子 */
    checkTodo(id){
      this.todos.forEach(item => {
        if(item.id === id) item.done = !item.done
      });
    },

    /* 删除 */
    delTodo(id){
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
    }
  },
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