<template>
  <div class="document-info-title-num">
    单证总数<span v-text="numobj.total"></span>发票数量<span v-text="numobj.invo"></span>其余单证数量<span v-text="numobj.other"></span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CaseInfoTitle',
  data(){
    return{
        numobj:{
          total:23,
          invo:3,
          other:10
        }
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
  .document-info-title-num{
    font-size: 14px;
    color: #606266;
    line-height: 33px;
  }
  .document-info-title-num span{
    margin-right: 15px;
    margin-left: 5px;
  }
</style>
