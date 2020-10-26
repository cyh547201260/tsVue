<template>
  <div class="table-pagination-box" >
    <el-pagination
      background

      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"


      >
    </el-pagination>

  </div>
</template>

<script>

  import TableItem from './TableItem.vue'

  export default {
    name: 'TablePagination',
    data(){
      return{
        currentPage4:1
      }
    },
    components:{},
    props: [],
    created(){},
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>

<style scoped>
  .table-pagination-box{
    text-align: right;
  }
</style>
