<template>
  <ul class="todo-main">
    <transition-group name="todo" appear>
      <Item 
        v-for="item in todos" 
        :key="item.id" 
        :todo="item" 
      ></Item>
    </transition-group>
  </ul>
</template>

<script>
import Item from './Item.vue'
export default {
  name:'List',
  components:{
    Item
  },
  props:['todos']
}
</script>

<style scoped>
  .todo-main{
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }
  .todo-empty{
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
   .todo-enter-active{
    animation: fly 0.5s linear;
  }
  .todo-leave-active{
    animation: fly 0.5s linear reverse;
  }
  @keyframes fly{
    from {
      transform: translateX(100%);
    }
    to{
      transform: translateX(0);
    }
  }
</style>