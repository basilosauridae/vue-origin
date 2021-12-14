<template>
  <footer class="footer">
    <span class="todo-count">剩余 <strong>{{leftCount}}</strong> 个未完成</span>
    <ul class="filters">
      <li>
        <a href="#/" @click="$emit('change-now', 'all')" :class="{selected:nowBtn==='all'}">全部</a>
      </li>
      <li>
        <a href="#/active" @click="$emit('change-now', 'active')" :class="{selected:nowBtn==='active'}">未完成</a>
      </li>
      <li>
        <a href="#/completed" @click="$emit('change-now', 'completed')" :class="{selected:nowBtn==='completed'}">已完成</a>
      </li>
    </ul>
    <button class="clear-completed" @click="$emit('clear-todo')">清除已完成</button>
  </footer>
</template>

<script>
export default {
  props:{
    list:{
      type:Array,
      default:[]
    },
    nowBtn:{
      type:String,
    }
  },
  computed:{
    leftCount(){
      // 过滤出符合不等于当前flag即为false 未完成(剩余)的长度 
      return  this.list.filter(item=>!item.flag).length
    }
  }
}
</script>

<style>

</style>