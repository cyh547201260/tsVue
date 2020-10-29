<template>
  <el-drawer class='custom-drawer-box' title="" :size="'176px'" :visible.sync="appCenterDraw" direction="ttb" :before-close="maskCloseDrawer" :close-on-press-escape='true' :wrapperClosable="true" :with-header="false" :show-close='true' :close="onDrawClose()" :open="onDrawOpen()">
    <div class="apps-list-box">
      <apps-center-list :applist="appsItemList"></apps-center-list>
    </div>
  </el-drawer>
</template>

<script>

import AppsCenterList from './AppsCenterList.vue'
export default {
  data() {
    return {
    }
  },
  components:{AppsCenterList},
  props:['applist'],
  computed:{
    appsItemList(){
      return this.$store.getters.appsList
    },
    appCenterDraw(){
      return this.$store.getters.appsCenterShow
    }
  },
  created() {
  },
  mounted(){
    console.log('3123123213123')
    console.log(this.applist)

  },
  methods: {
    onDrawClose() {
      console.log('close')
    },
    onDrawOpen() {
      console.log('open')
    },
    maskCloseDrawer(){
      this.$store.dispatch('app/toggleAppsCenter')
    }
  }
}
</script>

<style scoped>
  .apps-list-box{
    margin-top: 56px;
  }

</style>
<style>
  .custom-drawer-box .el-drawer{
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
</style>
