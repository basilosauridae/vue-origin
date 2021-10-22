<template>
  <div class="container">
    <p>姓名：{{name}}</p>
    <p>性别：{{sex}}</p>
    <button @click="showName">点击出名称</button>
  </div>
</template>

<script>
import {mixin, mixin2} from '../mixin'
export default {
  data() {
    return {
      name:'张三',
      sex:'man'
    }
  },
 /*  methods: {
    showName(){
      alert(this.name)
    }
  }, */
  mixins:[mixin,mixin2],
  mounted() {
    console.log('原组件中的生命周期执行！') //混入文件和原组件生命周期相同，混合文件中的先执行
  },
}
</script>
