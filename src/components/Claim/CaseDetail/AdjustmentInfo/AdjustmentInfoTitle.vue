<template>
  <div class="adjustment-info-contnet-title">
    <div class="content-title-left">
      小额案件 (单位：元)
    </div>
    <div class="content-title-right">
      <div class="content-title-right-btn">
        <adjustment-info-title-btn :btnicon="'el-icon-edit'" :btnname="'编辑'"></adjustment-info-title-btn>
        <adjustment-info-title-btn :btnicon="'el-icon-date'" :btnname="'计算'"></adjustment-info-title-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AdjustmentInfoTitleBtn from './AdjustmentInfoTitleBtn.vue'

export default {
  name: 'AdjustmentInfoTitle',
  data(){
    return{
    }
  },
  props:[],
  components: {AdjustmentInfoTitleBtn},
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
  .adjustment-info-contnet-title{
    display: flex;
    line-height: 24px;
  }
  .content-title-left{
    flex: 1;
    font-size: 14px;
    color: #606266;
  }
  .content-title-right{
    flex: 1;
    text-align: right;
  }
  .content-title-right-btn{
    display: flex;
    justify-content: flex-end;
  }
</style>
