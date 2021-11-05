<template>
  <li>
    <label>
      <!-- 虽然v-model更加方便 也能实现这个功能 但是直接修改了props的值 不符合规范 -->
      <!-- <input type="checkbox" v-model="todo.done"> -->
      
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)">
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" @click="handleDel(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name:'Item',
  props:['todo'],
  methods: {
    handleCheck(id){
      // this.checkTodo(id)
      this.$bus.$emit('checkTodo',id)
    },
    handleDel(id){
      if(confirm('确定删除吗？')){
        // this.delTodo(id)
        this.$bus.$emit('delTodo',id)
      }
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