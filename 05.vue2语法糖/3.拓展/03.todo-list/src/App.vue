<template>
  <section class="todoapp">
    <todo-header @add-todo="addTodo"></todo-header>
    <todo-main :list="showList" @del-todo="delTodo" @change-state="changeState"></todo-main>
    <todo-footer :list="list" @change-now="changeNow" :nowBtn="nowBtn" @clear-todo="clearTodo"></todo-footer>
  </section>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter
  },
  data(){
    return{
      list:[
        {id:1,name:'吃饭',flag:true},
        {id:2,name:'睡觉',flag:false},
        {id:3,name:'打豆豆',flag:true}
      ],
      nextId:4,
      nowBtn:'all'
    }
  },
  methods:{
    delTodo(id){
      // list是父组件中的数据 必须父组件自己更改
      this.list = this.list.filter(item=>item.id!==id)
    },
    addTodo(todoName){
      // unshift会改变原数组 写成this.list=this.list.shift(...)❌
      this.list.unshift({
        id:this.nextId,
        name:todoName,
        flag:false //刚添加的肯定没有完成
      })
      this.nextId++//添加完后给当前定义的默认nextId再添加，不然会变回初始值4
    },
    changeState(id,flag){
      // 子组件改变状态 通知父组件改变 find找出符合条件的第一项 否则返回undefined
      const father = this.list.find(item=>item.id===id)
      father.flag = flag //不能写反了 爸爸的状态是儿子改变后的
    },
    // 底部点击按钮的状态 对应展示main中showList的内容
    changeNow(str){
      this.nowBtn = str
    },
    clearTodo(){
      this.list = this.list.filter(item=>item.flag===false)
    }
  },
  computed:{
    showList(){
      switch(this.nowBtn){
        case 'all':return this.list
        case 'active':return this.list.filter(item=>item.flag===false)
        case 'completed':return this.list.filter(item=>item.flag===true)
      }
      return this.list
    }
  },
}
</script>
