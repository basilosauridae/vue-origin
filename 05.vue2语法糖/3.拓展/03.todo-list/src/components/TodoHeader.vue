<template>
  <header class="header">
    <h1>任务列表</h1>
    <input class="new-todo" placeholder="请输入目标任务名称" @keyup.enter="add" v-model="todoName">
  </header>
</template>

<script>
export default {
  data(){
    return{
      todoName:''
    }
  },
  methods:{
    add(){
      if(this.todoName.trim()==='')return
      this.$emit('add-todo',this.todoName)
      this.todoName = ''
    }
  }
}
</script>

<style>

</style>