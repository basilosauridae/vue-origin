<template>
  <li>
    <label>
      <!-- 虽然v-model更加方便 也能实现这个功能 但是直接修改了props的值 不符合规范 -->
      <!-- <input type="checkbox" v-model="todo.done"> -->
      
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)">
      <span  v-show="!todo.isEdit">{{todo.title}}</span>
      <input 
        type="text" 
        v-show="todo.isEdit" 
        :value="todo.title"
        @blur="handleBlur(todo,$event)"
        ref="inputTitle"
      >
    </label>
    <button class="btn btn-danger" @click="handleDel(todo.id)">删除</button>
    <button 
      class="btn btn-edit" 
      @click="handleEdit(todo)" 
      v-show="!todo.isEdit"
    >编辑</button>
  </li>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name:'Item',
  props:['todo'],
  methods: {
    handleCheck(id){
      // this.checkTodo(id)
      // this.$bus.$emit('checkTodo',id)
      pubsub.publish('checkTodo',id)
      
    },
    handleDel(id){
      if(confirm('确定删除吗？')){
        // this.delTodo(id)
        // this.$bus.$emit('delTodo',id)
        pubsub.publish('delTodo',id)
      }
    },
    handleEdit(todo){
      // todo.isEdit = true                    //1.不是响应式的
      // this.$set(todo,'isEdit',true)         //2.消耗性能 如果已经有isEdit 就无需再次添加属性
      // if(todo.isEdit){                      //3.当在输入框中点击更改后 又出现了isEdit为false 存在逻辑漏洞
      // if(todo.hasOwnProperty('isEdit')){    //4.报错写法,以下是正确写法
      if(Object.prototype.hasOwnProperty.call(todo,'isEdit')){
        console.log('todo身上已存在isEdit')
        todo.isEdit = true
      }else{
        console.log('todo身上不存在isEdit')
        this.$set(todo,'isEdit',true)
      }
      // 解决点击所有编辑都出现输入框 让自动获取焦点
      // nextTick所指定的回调会在DOM节点更新之后再执行
      // this.$refs.inputTitle.focus()//直接写这个没用 此时页面不存在input框 
      this.$nextTick(function () {
         this.$refs.inputTitle.focus()
      })
    },
    // 输入框失去焦点时 值变为失去焦点前最后一次更改的值(在App.vue中定义updateTodo)
    handleBlur(todo,e){
      todo.isEdit = false
      if(!e.target.value.trim()) return alert('输入不能为空')
      this.$bus.$emit('updateTodo',todo.id,e.target.value)
    }
  },
}
</script>

<style scoped>
  li{
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }
  li label {
    float: left;
    cursor: pointer;
  }
  li label li input{
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }
  li button{
    float: right;
    display: none;
    margin-top: 3px;
  }
  li:before{
    content: initial;
  }
  li:last-child{
    border-bottom: none;
  }

  li:hover{
    background-color: #ddd;
  }
  li:hover button {
    display: block;
  }
</style>