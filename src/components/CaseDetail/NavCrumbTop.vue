<template>
  <div class="nav-top-box">
    <div class="nav-top-left">
      <el-button type="primary">返回</el-button>
      <breadcrumb></breadcrumb>
    </div>
    <div class="nav-top-right">
      <el-button type="primary">全部方案</el-button>
      <el-button type="primary">历史赔案</el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getApps,getMenusList } from '@/api/nav'
import Breadcrumb from '../../components/Breadcrumb/index.vue'

export default {
  name: 'CaseDetail',
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
  }
  .nav-top-left{
    flex: 1;
    -webkit-flex: 1;
    overflow: hidden;
  }
  .nav-top-left .el-button{
    height: 40px;
  }
  .nav-top-right{
    flex: 2;
    -webkit-flex: 2;
    text-align: right;
  }
</style>
