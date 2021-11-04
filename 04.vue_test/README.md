# 04.vue_test

## ref属性

1. 被用来给元素或子组件注册引用信息（id的替代者）
2. 应用在html标签上获取的是真实DOM元素，应用在组件标签上的是组件实例对象（vc）
3. 使用方式:ref和this.$ref.xxx

## 配置项props

1. 功能：让组件接收外部传入的数据

2. 备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，控制台会发出警告

   `若因业务需求必须修改，请复制props的内容到data中一份，再去修改data中的数据`

## mixin混入

1. 功能：多个组件 若配置相同 可以将配置提取 混入成一个对象
2. 使用方式：
   - 在mixin.js中混合定义 export const a = {...}
   - 使用混入 import引入
     全局混入 Vue.mixin(xxx)
     局部混入 mixins:['名称']
3. 注意：
   - 混合就是混入相同的配置项进行组件内部的复用
   - 混合原组件中没有的 合并不覆盖
   - 混合原组件有的 以原组件中有的为主
   - 但是生命周期即使和原组件中相同 都会执行 且混合文件中的生命周期内容先执行

## 插件

1. 功能：用于增强Vue

2. 本质：包含install方法的一个对象，install的第一个参数是Vue,第二个以后的参数是插件使用者传递的数据

3. 定义插件：

   在和main.js同级添加plugin.js中定义：

   ```jsx
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
   ```

4. 使用插件: 在main.js中引入插件，并Vue.use(...)

   ​

## scoped样式

1.  作用：让样式在局部生效，防止全局类名相同 引起的样式冲突
2.  写法：<style scoped>



## 总结todoList案例

1. 组件化编码流程：
   - 拆分静态组件：组件按照功能点拆分，命名不要与html元素冲突
   - 实现动态组件：考虑好数据的储存位置，数据是一个组件在用，还是一些组件在用
     - 一个组件在用：放在组件自身即可
     - 一些组件在用：放在他们共同的父组件上`状态提升`
   - 实现交互：从绑定事件开始
2. props适用于：
   - 父组件 => 子组件 通信
   - 子组件 => 父组件 通信（要求父先给子一个函数 子去调用）
3. v-model使用时，其绑定的值是不能通过props传递过来的，因为props不可直接被修改
4. props传递过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做



## WebStorage

1. 存储内容大小一般在5M左右（不同浏览器容量不同）
2. 浏览器通过Window.sessionStorage和Window.localStorage属性来实现本地存储机制
3. 相关API:
   1. xxxxStorage.setItem('key' , 'value')
   2. xxxxStorage.getItem('key') 
   3. xxxxStorage.removeItem('key') 
   4. xxxxStorage.clear() 
4. 备注
   1. SessionStorage存储的内容会随着浏览器窗口关闭而消失
   2. LocalStorage存储的内容，需要手动清除才消失
   3. `xxxxStorage.getItem('key') `若对应的key值获取不到，返回值是null
   4. JSON.parse(null)的结果仍然是null

## 组件的自定义事件

区别于JS中的内置事件，内置事件供html标签使用，自定义事件供组件使用

1. 一种组件之间的通信方式  适用于`子传父`

2. 使用场景：A是父组件，B是子组件，B想传递数据给A，就要在A中给B绑定自定义事件（事件的回调在A中）

3. 使用方式 ... 

   [link]: https://www.yuque.com/docs/share/3707bf1f-5227-43ab-8700-c4efd169992c?#《💌vue2.x



## 全局事件总线

1. 一种组件的通信方式 适用于`任意组件间通信`

2. 安装全局事件总线

   ```jsx
   new Vue({
     ...
     beforeCreate(){
     	Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vue
     ...
   })
   ```

3. 使用事件总线

   1. 接收数据的组件：A组件想接收数据，则在A组件中给$bus绑定自定义事件，事件的`回调留在A组件本身`
   2. 提供数据的组件：`this.$bus.$emit('xxx' ，数据)`
   3. 最好在beforeDestroy钩子中，用$off 解绑 **当前组件**所用到的事件

   ```jsx
   //数据接收的组件：
   methods(){
     ...
     demo(data){...}
     ...
   }
   mounted(){
     this.$bus.$on('xxx',this.demo)
   }
   beforeDestroy(){
    this.$bus.$off('xxx')
   }
   ```

   ​



