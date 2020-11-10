<template>
  <div class="history-operation-title-box">
    <el-tabs class="history-operation-tabs" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="历史操作记录" name="first"></el-tab-pane>
      <el-tab-pane label="单证标记记录" name="second"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
  name: 'HistoryOperationTitleTab',
  data(){
    return{
      activeName:'first'
    }
  },
  components: {},
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  created() {
  },
  methods: {

  }
}

</script>

<style lang="scss" scoped>
.history-operation-title-box{
  width: 100%;
  height: 48px;
  background: rgba(46, 198, 181, .09);
  padding: 0 24px;
}
.history-operation-tabs{
  height: 24px;
}
</style>
<style>
  .history-operation-content .el-tabs__nav-wrap::after{
    display: none;
  }
  .history-operation-content .el-tabs__item{
    height: 48px;
    line-height: 48px;
  }
</style>
