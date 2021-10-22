# 04.vue_test

## ref属性
  1.被用来给元素或子组件注册引用信息（id的替代者）
  2.应用在html标签上获取的是真实DOM元素，应用在组件标签上的是组件实例对象（vc）
  3.使用方式:ref和this.$ref.xxx

## 配置项props
  1.功能：让组件接收外部传入的数据
  2.备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，控制台会发出警告；
    若因业务需求必须修改，请复制props的内容到data中一份，再去修改data中的数据

## mixin混入
  1.功能：多个组件 若配置相同 可以将配置提取 混入成一个对象
  2.使用方式：  
    （1）在mixin.js中混合定义 export const a = {...}
    （2）使用混入 import引入
      全局混入 Vue.mixin(xxx)
      局部混入 mixins:['名称']
  3.注意：
    ·混合就是混入相同的配置项进行组件内部的复用
    ·混合原组件中没有的 合并不覆盖
    ·混合原组件有的 以原组件中有的为主
    ·但是生命周期即使和原组件中相同 都会执行 且混合文件中的生命周期内容先执行

## 插件
  1.功能：用于增强Vue
  2.本质：包含install方法的一个对象，install的第一个参数是Vue,第二个以后的参数是插件使用者传递的数据
  3.定义插件：
    在和main.js同级添加plugin.js中定义：

    对象.install = function(Vue,option){
      //添加全局过滤器
      Vue.filter(...)

      //添加全局指令
      Vue.directive(...)

      //配置全局混入（合）
      Vue.mixin(...)

      //添加实例方法
      Vue.prototype.$myMethod = function(){...}
      Vue.prototype.$myProperty = xxx
    }
  4.使用插件
    在main.js中引入插件，并Vue.use(...)
