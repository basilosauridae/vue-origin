<template>
  <!-- 方法一 -->
  <h1>{{blogTit}}</h1>
</template>

<script>
export default {
    data(){
        return{
            blogTit:'myBLOG'
        }
    },
    methods:{
        // 方法二
        render:function(createElement){
            return createElement('h1',this.blogTit)
            /* reutn出一个虚拟的DOM, 更准确的名字是createNodeDescription,包含的信息会告诉Vue页面上需要
            渲染什么样的节点，以及其子节点的描述信息。这样的节点为VNode,虚拟节点。虚拟DOM是我们对由Vue组件树
            建立起来的整个VNode树的称呼。
            */
        }
    }
    // 以上两种写法Vue都会自动保持页面更新
}
</script>

<style>

</style>