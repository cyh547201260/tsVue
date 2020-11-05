<template>
  <div class="adjustment-info-content-box">
    <adjustment-info-title></adjustment-info-title>
    <adjustment-info-data-table :tablekey="tableKey" :tabledata="tableData"></adjustment-info-data-table>
    <adjustment-info-data-detail-btn></adjustment-info-data-detail-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AdjustmentInfoTitle from './AdjustmentInfoTitle.vue'
import AdjustmentInfoDataTable from './AdjustmentInfoDataTable.vue'
import AdjustmentInfoDataDetailBtn from './AdjustmentInfoDataDetailBtn.vue'

export default {
  name: 'AdjustmentInfoContent',
  data(){
    return{
      tableData:[{value1:'982.32',value2:'122.12',value3:'0.00',value4:'0.00',value5:'122.12',value6:'982.32',value7:'0.00',value8:'982.32'}],
      tableKey:['申请金额','扣减金额','基金支付','第三方支付','总扣减','审核金额','本次消耗免赔','应付金额']

    }
  },
  props:[],
  components: {AdjustmentInfoTitle,AdjustmentInfoDataTable,AdjustmentInfoDataDetailBtn},
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

</style>
