<template>
  <span>今年我{{age}}岁</span>
</template>

<script>
// 1.只有el
let vm = new Vue({
    el:'#app',
    data:{
        age:12
    }
})

// 2.只有template,不可
// 3.只有render,不可
// 4.既有el又有template,Vue会用template里的内容替换el的outHTML
let vm = new Vue({
    el:'#app',
    template:'<div><p>年龄{{age}}</p></div>',
    data:{
        age:12
    }
    // 此时el为app的div没有了 见4.
})

// 5.既有el又有template和render,只是要render函数中return的内容，因为优先级最高
let vm = new Vue({
    el:'#app',
    template:'<div><p>年龄{{age}}</p></div>',
    data:{
        age:12
    },
    render:function (createElement) {
        //render出来的无法使用小胡子语法，Vue只把render的返回值放在HTML中，无法再次解析
        // return createElement('h1','我是render出的年龄{{age}}') 
        // 正确写法,render函数是为了发挥JS的最大编程能力
        return createElement('h1','我是render出来的'+this.age)
    }
})

</script>

<style>

</style>