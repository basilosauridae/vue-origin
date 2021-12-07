<template>
  <div>test</div>
</template>

<script>
export default {
  name:'Test',
  beforeDestroy() {
    console.log('test组件即将被销毁')
  },
}
</script>

<style>

</style>