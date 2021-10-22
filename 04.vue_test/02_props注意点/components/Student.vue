<template>
  <div class="container">
    <h2>{{msg}}</h2>
    <p>姓名：{{name}}</p>
    <p>性别：{{sex}}</p>
    <!-- <p>年龄：{{age}}</p> -->
    <p>年纪：{{myAge + 1}}</p>
    <button @click="updateAge">尝试修改已接收的年龄</button>
  </div>
</template>

<script>
// props的数据优先于data中的
export default {
  data() {
    return {
      msg:'personal Information',
      myAge: this.age
    }
  },
  // 简单申明接收
  props:['name','sex','age'],

  // 接收的同时对数据进行类型限制
 /*  props:{
    name:String,
    sex:String,
    age:Number
  } */

  // 接收的同时对数据进行类型限制+默认值的指定+必要性的限制
 /*  props:{
    name:{
      type:String,
      required:true
    },
    sex:{
      type:String,
      required:true //required和default不会同时出现，两者逻辑是互斥的
    },
    age:{
      type:Number,
      default:99
    }
  }, */
  methods: {
    updateAge(){
      this.myAge++
    }
  },
}
</script>
