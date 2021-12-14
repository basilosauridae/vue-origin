<template>
  <section class="main">
    <ul class="todo-list">
      <li :class="{ completed: item.flag }" v-for="item in list" :key="item.id">
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.flag" @change="changeState(item.id,$event)">
          <label>{{ item.name }}</label>
          <button class="destroy" @click="del(item.id)"></button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props:{
    list:{
      type:Array,
      default:[]
    }
  },
  methods:{
    del(id){
      // 子组件中点击哪个id 触发一个事件并传参告诉父组件
      this.$emit('del-todo',id)
    },
    changeState(id,e){
      this.$emit('change-state',id,e.target.checked )
    }
  }
}
</script>

<style>

</style>