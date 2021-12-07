// 消息中的详情
<template>
  <div>
    <ul>
      <!-- <li>编号：{{$route.query.id}}</li>
      <li>内容：{{$route.query.title}}</li> -->

      <!-- <li>编号：{{$route.params.id}}</li>
      <li>编号：{{$route.params.title}}</li> -->
      
      <li>{{id}}</li>
      <li>{{title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'xiangqing',
  props:['id','title'],
  data() {
    return {
      list:this.$route.query
    }
  },
}
</script>

<style>

</style>