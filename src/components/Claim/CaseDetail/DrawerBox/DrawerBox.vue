<template>
  <div class="drawer-box">
    <el-drawer ref="editCollectionDrawer" :title="drawerOpenTitle" :modal="false" :modal-append-to-body="false" :visible.sync="drawerOpenState" :direction="direction" :size="drawerOpenSize" :before-close="closeDrawer">
      <el-scrollbar class='desc-wrapper' wrap-class="scrollbar-wrapper">

        <div class="drawer-content-box">
          <template v-if="drawerOpenType == 'editCollection'">
            <edit-collection @drawerclose='closeDrawer' ></edit-collection>
          </template>
          <template v-if="drawerOpenType == 'documentMarking'">
            <document-marking @drawerclose='closeDrawer' ></document-marking>
          </template>
        </div>

      </el-scrollbar>
    </el-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EditCollection from './EditCollection.vue'
import documentMarking from './DocumentMarking.vue'

export default {
  name: 'DrawerBox',
  data(){
    return{
      direction:'rtl'
    }
  },
  props:['draweropen'],
  components: {EditCollection,documentMarking},
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
    closeDrawer(done) {
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
    z-index: 2012;
  }
  .drawer-content-box{
    padding: 0 16px 70px 16px;
  }
  .desc-wrapper{
    height: calc(100vh - 77px);
    overflow-x: hidden;
  }
</style>
<style>
 <style>
   .drawer-box .el-scrollbar__bar.is-vertical{
     background: rgba(155,155,155,.5);
   }
   .drawer-box .el-scrollbar__wrap{
     overflow: hidden;
   }
   .drawer-box .el-scrollbar__thumb{
     background: #999;
   }
   .drawer-box .scrollbar-wrapper.el-scrollbar__wrap{
     margin: 0 !important;
   }
 </style>
</style>
