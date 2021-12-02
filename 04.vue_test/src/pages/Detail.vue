// 消息中的详情
<template>
  <div>
    <ul>
      <li>编号：{{$route.query.id}}</li>
      <li>内容：{{$route.query.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:this.$route.query
    }
  },
}
</script>

<style>

</style>