export default {
  install(Vue){
    // console.log( '🥴和🙄' )

    // 全局过滤器
    Vue.filter('mySlice',function(value){
      return value.slice(0,4)
    })

    // 定义全局指令
    Vue.directive('fbind',{
      bind(el,binding){
        el.value = binding.value
      },
      inserted(el){
        el.focus()
      },
      update(el,binding){
        el.value = binding.value
      }
    })

    // 定义混入(放在插件 打印每个实例data中都包含x,y属性)
    Vue.mixin({
      data(){
        return{
          x:100,
          y:100
        }
      }
    })

    // 给vue原型上添加方法（vm和vc就都能用了）
    Vue.prototype.hello = () => { alert('hello') }
  }
}