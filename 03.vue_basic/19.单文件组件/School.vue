<template>
  <div class="demo">
    <h2>名称：{{schoolName}}</h2>
    <h2>地址：{{address}}</h2>
    <button @click="show">点我有吃的</button>
  </div>
</template>

<script>
export default {
  name:'School',
  data(){
    return{
      schoolName:'咕噜噜',
      address:'咚咚锵'
    }
  },
  methods: {
    show(){
      alert('🍇')
    }
  },
}
</script>

<style>
  .demo{
    background-color: plum;
  }
</style>