<template>
  <div class="drawer-box">
    <el-drawer :title="drawerOpenTitle" :visible.sync="drawerOpenState" :direction="direction" :size="drawerOpenSize" :before-close="handleClose">
      <div class="drawer-content-box">
        <template v-if="drawerOpenType == 'editCollection'">
          <edit-collection></edit-collection>
        </template>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EditCollection from './EditCollection.vue'

export default {
  name: 'DrawerBox',
  data(){
    return{
      direction:'rtl'
    }
  },
  props:['draweropen'],
  components: {EditCollection},
  computed: {
    ...mapGetters([
      'name'
    ]),
    drawerOpenState(){
      return this.$store.getters.drawerOpenState
    },
    drawerOpenType(){
      return this.$store.getters.drawerOpenType
    },
    drawerOpenSize(){
      return this.$store.getters.drawerOpenSize
    },
    drawerOpenTitle(){
      return this.$store.getters.drawerOpenTitle
    }


  },
  created() {
  },
  methods: {
    handleClose(done) {
      // this.$confirm('确认关闭？')
      //   .then(_ => {
          // done();
          this.$store.dispatch("detail/setDrawerOpenState", false);
        // })
        // .catch(_ => {});
    }
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
  .drawer-content-box{
    padding: 0 16px;
  }
</style>
<style>
  .drawer-box .el-drawer__wrapper{
    z-index: 2200 !important;
  }
</style>
