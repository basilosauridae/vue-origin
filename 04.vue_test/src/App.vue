<template>
  <div id="root">
    <time-line 
      :activities="activities"
      @handleButton="handleButton"
    ></time-line>
  </div>
</template>

<script>
import TimeLine from './components/TimeLine.vue'

export default {
  name:'App',
  components:{
    TimeLine
  },
   data() {
    return {
      activities: [ 
        {
          content: '孙权 | 吴王',
          timestamp: '团队名称 2018-04-12 20:46',
          size: 'large',
          type: 'info',
          icon: 'el-icon-circle-plus-outline',
          left:'填写表单',
          btn:'待提交'
        }, {
          content: '曹丕 | 魏文帝',
          timestamp: '团队名称 2018-04-03 20:46',
          type:'danger',
          size: 'large',
          icon:'el-icon-circle-close',
          left:'主管审批',
          meun:'这边库存不足了',
          btn:'驳回'
        }, {
          content: '孙全 | 吴王',
          timestamp: '团队名称 2018-04-03 20:46',
          size: 'large',
          type:'success',
          icon:'el-icon-circle-check',
          left:'填写表单',
          btn:'提交'
        }
      ]
    }
  },
  methods: {
    /* 待提交、驳回、提交按钮操作 */
    handleButton(x){
      // 根据后台返回参数判断是哪个按钮,x是子组件告诉父组件点击的是哪个类型的按钮
      console.log('操作函数在父组件中写',x)
    }
  }
}
</script>

<style>
  body{
    background-color: #fff;
  }
  .btn{
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }
  .btn-danger{
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }
  .btn-edit{
    background-color: skyblue;
    color: #fff;
    border: 1px solid rgb(13, 181, 248);
    margin-right: 5px;
  }
  .btn-danger:hover{
    color: #fff;
    background-color: #bd362f;
  }
  .btn:focus{
    outline: none;
  }
</style>