<template>
  <div class="apps-list-item" @click="goApp(appitem)">
    <div class="apps-item-img-box">
      <!-- <img :src="appitem.photo" /> -->
      <i :class="appitem.photo"></i>
    </div>
    <div class="apps-item-title">
      <span v-text="appitem.name"></span>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  props:['appitem'],
  created() {
  },
  methods: {
    goApp(item){
      this.$store.dispatch('app/toggleAppsCenter')
      window.location.href = item.url;
    }
  }
}
</script>

<style lang="scss" scoped>
  .apps-list-item{
    margin-right: 48px;
    cursor: pointer;
    user-select: none;
  }
  .apps-item-img-box{
    width: 54px;
    height: 54px;
    background: pink;
    border-radius: 16px;
    text-align: center;
    line-height: 54px;
    margin: 0 auto;
  }
  .apps-item-img-box i{
    color: white;
    font-size: 25px;
  }
  .apps-item-title{
    color: #333;
    font-size: 14px;
    margin-top: 6px;
  }
</style>
