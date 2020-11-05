<template>
  <div class="adjustment-info-data-table">
    <el-table :data="tabledata" style="width: 100%">
      <template v-for="(item,key) in tablekey">
        <el-table-column :align="'center'" :label="item">
          <template slot-scope="scope">
            <span v-text="tabledata[0]['value'+(key + 1)]"></span>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AdjustmentInfoTitleBtn from './AdjustmentInfoTitleBtn.vue'

export default {
  name: 'AdjustmentInfoDataTable',
  data(){
    return{
    }
  },
  props:['tabledata','tablekey'],
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
  .adjustment-info-data-table{
    margin-top: 15px;
  }
</style>
<style>
  .adjustment-info-data-table .el-table__header-wrapper th, .adjustment-info-data-table .el-table__header-wrapper tr{
    background: #FAFAFA;
    color: #606266;
    font-size: 14px;
  }
</style>
