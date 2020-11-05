<template>
  <div>
    <el-table-column class="table-item"  :class-name="getItemClass(tablekey)" :width="getCellWidth(tablecellwidth[indexkey])" :show-overflow-tooltip="true"  :prop="tablekey.item_api_key" :label="tablekey.item_name" >
      <template slot-scope="scope">
        <template v-if="tablekey.item_api_key == 'claim_status'">
          <el-tag class="ins-state-tag" v-if="scope.row.state == 1">理赔失败</el-tag>
          <el-tag class="ins-state-tag" v-if="scope.row.state == 2" type="success">理赔结束</el-tag>
          <el-tag class="ins-state-tag" v-if="scope.row.state == 3" type="info">待审核</el-tag>
          <el-tag class="ins-state-tag" v-if="scope.row.state == 4" type="warning">延迟受理</el-tag>
          <el-tag class="ins-state-tag" v-if="scope.row.state == 5" type="danger">打款中</el-tag>
        </template>
        <template v-if="tablekey.item_api_key == 'claim_id'">
          <router-link :to="{ path: 'caseDetail/index', query: { id: tableitemdataobj[scope.$index][indexkey]['value'] }}"><el-link type="primary" v-text="tableitemdataobj[scope.$index][indexkey]['value']"></el-link></router-link>
        </template>
        <template v-else>
          <span v-text="tableitemdataobj[scope.$index][indexkey]['value']"></span> <!--tableitemdataobj ? tableitemdataobj[scope.$index]['value'] : ''-->
        </template>
      </template>
    </el-table-column >
  </div>
</template>

<script>
  export default {
    name: 'SearchBtns',
    data(){
      return{}
    },
    components:{},
    props: ['tabledata','tablekey','indexkey','tablecellwidth','tableitemdataobj','showvalue','fullboxwidth','fullcellwidth'],
    mounted(){},
    watch:{
    },
    computed:{
    },
    methods: {
      getItemClass(tablekey){
        var str = ''
        if(tablekey.item_api_key == 'apply_amount'){
          str += ' table-item-align-right '
        }

        return str;
      },
      getCellWidth(cellNum){
        var num = 0;
        if(this.fullcellwidth == 0){
          return cellNum
        }else{
          return Number(cellNum) / Number(this.fullcellwidth) * Number(this.fullboxwidth) - 10
        }
      }
    }
  }
</script>

<style scoped>
  .table-item{
    max-width: 270px;
    min-width: 70px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .el-table td, .el-table th{
    padding: 8px 0 !important;
  }
  .ins-state-tag{
    width: 77px;
    text-align: center;
  }
</style>
<style>
  .data-table-box .el-table td,
  .data-table-box .el-table th{
    padding: 8px 0 !important;
  }
  .data-table-box .el-table .cell{
    padding-right: 0;
  }
  .table-item-align-right div{
    text-align: right;
  }
</style>
