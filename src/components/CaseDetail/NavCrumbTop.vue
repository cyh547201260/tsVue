<template>
  <div class="nav-top-box">
    <div class="nav-top-left">
      <el-button type="primary" size="small">返回</el-button>
      <breadcrumb style="transform: translateY(2px);"></breadcrumb>
    </div>
    <div class="nav-top-right">
      <el-button type="primary" size="small">全部方案</el-button>
      <el-button class="top-btn-group-mar" type="primary" size="small">历史赔案</el-button>
      <div class="full-screen-btn top-btn-group-mar"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getApps,getMenusList } from '@/api/nav'
import Breadcrumb from '../../components/Breadcrumb/index.vue'

export default {
  name: 'NavCrumbTop',
  data(){
    return{

    }
  },
  components: {Breadcrumb},
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
  .nav-top-box{
    width: 100%;
    height: 48px;
    background: white;
    border-radius: 8;
    display: flex;
    display: -webkit-flex;
    padding: 0 23px 0 15px;
    border-radius: 8px;
  }
  .nav-top-left{
    flex: 1;
    -webkit-flex: 1;
    overflow: hidden;
    line-height: 48px;
  }
  .nav-top-left .el-button{
    // height: 40px;
  }
  .nav-top-right{
    line-height: 48px;
    flex: 2;
    -webkit-flex: 2;
    text-align: right;
  }
  .full-screen-btn{
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #2EC6B5;
    display: inline-block;
    vertical-align: middle;
    transform: translateY(-1px);
    opacity: .1;
    cursor: pointer;
  }
  .top-btn-group-mar{
    margin-left: 16px;
  }
</style>
