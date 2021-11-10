<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add">
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
  name:'Top',
  // props:['recevice'],
  methods: {
    add(e){
      if(!e.target.value) return alert('输入不能为空')
      // console.log(e.target.value) //也可用v-model取值
      // 把输入的值包装成一个对象
      const content = {id:nanoid(),title:e.target.value,done:false}

      // this.recevice(content)
      this.$emit('recevice',content) //子传父用自定义事件 代替 函数调用传值

      e.target.value = '' 
    }
  }
}
</script>

<style scoped>
  .todo-header input{
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }
  .todo-header input :focus{
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.75),0 0 8px rgba(82, 168, 236, 0.8);
  }
</style>