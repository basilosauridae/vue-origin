<template>
  <div class="container">
    <p>名称：{{name | mySlice}}</p>
    <p>地址：{{address}}</p>
    <button @click="showName">点击出名称</button>

    <hr>
    <input type="text" v-fbind:value="name">

    <hr>

    <button @click="test">点我测试一个hello方法</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name:'网易1912街',
      address:'上海'
    }
  },
  methods: {
     showName(){
      alert(this.name)
    },
    test(){
      this.hello()
    }
  }

}
</script>
