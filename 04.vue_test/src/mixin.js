export const mixin = {
  methods: {
    showName() {
      alert(this.name)
    }
  },
  mounted() {
    console.log(this.name) //混入文件中的生命周期和原组件中即使相同 都会执行
  }
}

export const mixin2 = {
  data() {
    return {
      x: 666, //混合原组件中没有的 合并不覆盖
      name: '混合的名字' //混合原组件中有的 以原有的为主 可以看students的vue控制台
    }
  }
}
// 混合就是混入相同的配置项进行复用
