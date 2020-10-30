<template>
  <div class="case-detail-side-nav-box">
    <el-tabs tab-position="left" @tab-click="tabClick">
      <el-tab-pane v-for="item in navIndexObj" :label="item"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CaseDetailBody',
  data(){
    return{
      navIndexObj:['基本','单证','理算','记录','操作']
    }
  },
  components: {},
  computed: {
    ...mapGetters([
      'name'
    ]),
    caseDetailNavIndex(){
      return this.$store.getters.caseDetailNavIndex
    }
  },
  created() {
  },
  methods: {
    tabClick(tab) {
      console.log(tab.index);
    }
  }
}

</script>

<style lang="scss" scoped>
  .case-detail-side-nav-box{
    width: 63px;
    background: white;
    border-radius: 8px;
    padding: 3px 0;
  }
  .el-tabs__item{
    font-size: 16px;
  }
</style>
<style>
  .case-detail-side-nav-box .el-tabs__item{
     font-size: 16px;
     padding: 0 15px;
     color: #2A303C;
  }
  .case-detail-side-nav-box .el-tabs__nav-wrap::after{
      background: white;
  }
  .case-detail-side-nav-box .el-tabs__item.is-active{
    font-weight: 600;
    color: #2A303C;
  }
  .case-detail-side-nav-box .el-tabs__active-bar{
    width: 3px !important;
    /* height: 19px !important; */
    border-radius: 2px;
    background: #00ACA0;
    /* transform: translateY(10px); */
  }
  .case-detail-side-nav-box .el-tabs__active-bar::before{
    position: absolute;
    content: ' ';
    border-top: 10px solid white;
    left: 0;
    top: 0;
    right: 0;
  }
  .case-detail-side-nav-box .el-tabs__active-bar::after{
    position: absolute;
    content: ' ';
    border-bottom: 10px solid white;
    left: 0;
    bottom: 0;
    right: 0;
  }
</style>
