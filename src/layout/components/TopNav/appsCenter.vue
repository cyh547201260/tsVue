<template>
  <div>
    <div class="apps-center" @click="toggleSideBar()">
      <img src="" /> <span>应用列表</span>
    </div>
    <el-drawer title="" :visible.sync="appCenterDraw" direction="ttb" :close-on-press-escape='true' :wrapperClosable="true" :with-header="false" :show-close='true' :close="onDrawClose()" :open="onDrawOpen()">
      <div class="apps-list-box">
        <apps-center-list :applist="appsItemList"></apps-center-list>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppsCenterList from '../../../components/AppsCenterItem/AppsCenterList.vue'

export default {
  data(){
    return {
      appCenterDraw:false,
      appsItemList:this.$store.getters.appsList
    }
  },
  components: {
    AppsCenterList
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  mounted() {
    this.appsItemList = this.$store.getters.appsList;
    console.log(this.appsItemList)
  },
  methods: {
    onDrawClose() {
      console.log('close')
    },
    onDrawOpen() {
      console.log('open')
    },
    toggleSideBar() {
      this.appCenterDraw = !this.appCenterDraw;
      console.log(this.$store.getters.appsCenterShow)
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .apps-center{
    position: absolute;
    left: 40px;
    top: 18px;
    display: flex;
    display: -webkit-flex;
    width: 100px;
    cursor: pointer;
    user-select: none;
    z-index: 2020;
  }
  .apps-center img{
    width: 20px;
    height: 20px;
    background: #2ec6b5;
    transform: translateY(-2px);
    margin-right: 6px;
  }
  .apps-center span{
    font-size: 14px;
    color: #333;
    font-weight: 600;
  }
  .apps-list-box{
    margin-top: 56px;
  }
</style>
