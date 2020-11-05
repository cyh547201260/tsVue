<template>
  <div class="drawer-box">
    <el-drawer
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose">
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CaseDetailSideNav from './CaseDetailSideNav.vue'
import CaseDetailContent from './CaseDetailContent.vue'

export default {
  name: 'CaseDetailBody',
  data(){
    return{

    }
  },
  components: {CaseDetailSideNav,CaseDetailContent},
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
  .case-detail-box{
    display: flex;
    display: -webkit-flex;
    padding-left: 0;
    padding-top: 5px;
  }
  .case-detail-cont-left{
    width: 80px;
  }
  .case-detail-cont-right{
    flex: 1;
  }
  .case-detail-side-nav-ref{
    position: fixed;
    top: 180px;
    z-index: 2199;
  }
</style>
