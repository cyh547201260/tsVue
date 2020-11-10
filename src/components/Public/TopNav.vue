<template>
  <div class="top-nav">
    <div class="app-top-head">
      <div class="app-top-left">
        <span>鲸鹳综合管理平台</span>
      </div>
      <div class="app-top-right">
        <user-header-info></user-header-info>
      </div>
    </div>
    <apps-drawer></apps-drawer>
  </div>
</template>

<script>
  import AppsDrawer from '../../components/Public/AppsCenterItem/AppsDrawer.vue'
  import UserHeaderInfo from '../../components/Public/TopNav/UserHeaderInfo.vue'
  export default {
    name: 'TopNav',
    components: {
      UserHeaderInfo,
      AppsDrawer
    },
    computed: {
    },
    methods:{

    }
  }
</script>

<style lang="scss" scoped>

  .app-top-head{
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    height: 56px;
    z-index: 2000;
    display: flex;
    display: -webkit-flex;
    // box-shadow: 0px 2px 4px 0px rgba(231, 231, 231, 0.5);
  }
  .app-top-left{
    width: 200px;
    background: #535C64;
    height: 100%;
    text-align: center;
    line-height: 56px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    z-index: 2020;
  }
  .app-top-right{
    width: calc(100% - 200px);
    background: #535C64;
    height: 100%;
  }
</style>
