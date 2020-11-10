<template>
  <div class="apps-center-box">
    <div class="apps-center" @click="toggleMenuCenter()">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAACJElEQVQ4T6WUPWhTURiG3/fcJFahXVOhFHURCkkEIxq14CKYiAWXGjc3QZdOLjoUnJyUQoWmOhccKhWTjB0ak0JTsGn9QahFlyi6mKHYJud8cpLe0LS5iZC73Pvd+57nnMP3nEsAOJ1b6O9z/I9EJAkgKMAmwdlSLD4F0tiMvc68y54zSk+KcNTWpCwp40y+vxRfqdcWFKBviUTEHeTeBXi1Hksk7ajQcjZBo18DDLTmZFeUc3P9QjzDSCHzREQeHAS5Ncnkn8GjCwPl7S0Agx65H5Xjx04ynE9/AzDsBQMxD8EsgKxnpvEhbmF/ARzxCgqwQiK1B/TmUd1hKJ/+QGDEMyVYFUiK5EynlVGrUYbzmQlAnvYI2yjFEhFCRIUKmTkC422BXVYmYFmZ2tW1y2N2hwBEGFnOjhsxtwAOUaCaeih8UqLmRczDlskUKiKS2wnI1Jfojd91z9zAia3FvoHy9hUQQ2KkCVN0fmnqzzSoi9pUxnEqNV81/zE69r35zj40hDQv23rUeZsaxIzfH5xYjUarrB8R6txhs/fm+59uEs9Lsev3GS68TUOY6LGbuhbQp6xnFQL9PcIApW53hxGLoErBmLmOx8nCum1TII91wLzw7TpfATgewMY2OzXACrkT0GHrUbiQnobgXluY24AOamzQ6KQ122bOFov+avXnMwju7lthqxqHpVVBEptr56/l9/9l3dxI8c2wr+a/aOuD0v4Dgg8JYMz/vHQAAAAASUVORK5CYII=" /> <span>应用列表</span>
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
    transform: translateY(-2px);
    margin-right: 6px;
  }
  .apps-center span{
    font-size: 14px;
    color: white;
    font-weight: 600;
  }
</style>
