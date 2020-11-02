<template>
  <div>
    <template v-if="tablekey.name == 'state'">
        <el-table-column class="table-item"  :class-name="getItemClass(tablekey)" :width="tablecellwidth[indexkey]"  :show-overflow-tooltip="true"  :prop="tablekey.item_api_key" :label="tablekey.item_name" >
          <template slot-scope="scope">
            <el-tag class="ins-state-tag" v-if="scope.row.state == 1">理赔失败</el-tag>
            <el-tag class="ins-state-tag" v-if="scope.row.state == 2" type="success">理赔结束</el-tag>
            <el-tag class="ins-state-tag" v-if="scope.row.state == 3" type="info">待审核</el-tag>
            <el-tag class="ins-state-tag" v-if="scope.row.state == 4" type="warning">延迟受理</el-tag>
            <el-tag class="ins-state-tag" v-if="scope.row.state == 5" type="danger">打款中</el-tag>
          </template>
        </el-table-column>
    </template>
    <template v-else>
        <el-table-column class="table-item"  :class-name="getItemClass(tablekey)" :width="tablecellwidth[indexkey]"  :show-overflow-tooltip="true"  :prop="tablekey.item_api_key" :label="tablekey.item_name" ></el-table-column>
    </template>
  </div>
</template>

<script>

  export default {
    name: 'SearchBtns',
    data(){
      return{}
    },
    components:{},
    props: ['tabledata','tablekey','indexkey','tablecellwidth'],
    mounted(){},
    methods: {
      getItemClass(tablekey){
        var str = ''
        if(tablekey.name == 'amount'){
          str += ' table-item-align-right '
        }

        return str;
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
