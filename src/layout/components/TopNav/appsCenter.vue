<template>
  <div>
    <div class="apps-center" @click="toggleMenuCenter()">
      <img src="" /> <span>应用列表</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data(){
    return {

    }
  },
  components: {
  },
  computed: {
    ...mapGetters([
      'app'
    ]),
  },
  mounted() {
  },
  methods: {
    toggleMenuCenter(){
      this.$store.dispatch('app/toggleAppsCenter')
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
</style>
