<template>
  <div class="container">
    <p>名称：{{name}}</p>
    <p>地址：{{address}}</p>
    <button @click="showName">点击出名称</button>
  </div>
</template>

<script>
import {mixin} from '../mixin'
// props的数据优先于data中的
export default {
  data() {
    return {
      name:'网易',
      address:'上海'
    }
  },
 /*  methods: {
     showName(){
      alert(this.name)
    }
  }, */
  mixins:[mixin]
}
</script>
