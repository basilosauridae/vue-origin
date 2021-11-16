<template>
  <div class="container">
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :icon="activity.icon"
        :type="activity.type"
        :color="activity.color"
        :size="activity.size"
        :timestamp="activity.timestamp"
      >
          <!-- info是基本信息 -->
          <div class="info">
            <span>{{activity.content}}</span>
            <span class="left">{{activity.left}}</span>
            <el-button 
              :type="activity.type"
              size="small"
              @click="handleClick(activity.btn)"
            >
              {{activity.btn}}
            </el-button>
          </div>
          
          <!-- 如果有返回menu字段 展示审批意见 -->
          <div v-if="activity.meun" class="menu">
            <span>{{activity.meun}}</span> <br>
            <el-button type="text" @click="handleApproval">审批意见</el-button>
          </div>
      </el-timeline-item>
    </el-timeline>

    <!-- 审批意见弹框 -->
    <el-dialog
      title="审批意见"
      :visible.sync="dialogVisible"
      width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name:'TimeLine',
  props:['activities'],
  data() {
    return {
      dialogVisible:false
    }
  },
  methods: {
    handleClick(val){
      console.log(val)
      this.$emit('handleButton',val)
    },
    handleApproval(){
      console.log('点击了审批意见')
      this.dialogVisible = true
    }
   }
  }
</script>

<style scoped>
  .container{
    padding: 20px;
    position: relative;
  }
  .el-timeline{
    position: absolute;
    left: 100px;
  }
  .left{
    font-size: 18px;
    position: absolute;
    left: -88px;
  }
  .el-button {
    width: 60px;
    border-radius: 20px;
    padding: 5px;
  }
  .info{
    display: flex;
    justify-content: space-between;
  }
  .menu{
    background-color: #f6faff;
    padding: 5px;
    margin-top: 5px;
  }
</style>
