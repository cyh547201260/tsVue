<template>
  <div class="case-info-btn">
    <el-button type="primary" size="small" plain ><i class="el-icon-check"></i> 已标记单证</el-button>
    <el-button type="primary" size="small" plain ><i class="el-icon-download"></i> 下载图片</el-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CaseInfoTitle',
  data(){
    return{

    }
  },
  components: {},
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
  .case-info-btn{
    text-align: right;
  }
</style>
