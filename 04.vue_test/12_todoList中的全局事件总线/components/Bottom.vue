<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- 法一： 对应的isAll已经隐藏-->
      <!-- <input 
        type="checkbox" 
        :checked="isAll"
        @click="change"
      > -->

      <!-- 法二，v-model更改有动set函数 所以不能简写 -->
      <input 
        type="checkbox" 
        v-model="isAll"
      >
    </label>
    <span>
      <span>已完成{{done}}</span> / 全部{{total}}
    </span>
    <button class="btn btn-danger" @click="delDone">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name:'Bottom',
  props:['todos'],
  computed:{
    done(){
      // 方法一
      // return this.todos.filter(item=>item.done===true).length

      // 方法二
      return this.todos.reduce((pre,current)=> pre + (current.done ? 1 : 0 ),0)
    },
    total(){
      return this.todos.length
    },
    isAll:{
      // return this.done === this.total? true:false && this.total>0
      get(){
        return this.done === this.total? true:false && this.total>0
      },
      set(value){
        // this.checkAllToDo(value)
        this.$emit('checkAllToDo',value)
      }
    }
  },
  methods: {
    change(e){
      // console.log(e.target.checked)
      this.checkAllToDo(e.target.checked)
    },
    delDone(){
      // this.delAllDone()
      this.$emit('delAllDone')
    }
  },
}
</script>

<style scoped>
  .todo-footer{
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }
  .todo-footer label{
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }
  .todo-footer label input{
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }
  .todo-footer button{
    float: right;
    margin-top: 5px;
  }
</style>
