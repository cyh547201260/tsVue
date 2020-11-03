<template>
  <div class="table-pagination-box" >
    <el-pagination
      background

      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagePageCurrentPage"
      :page-sizes="pageSizes"
      :page-size="pagePageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pagePageTotal"

      >
    </el-pagination>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import TableItem from './TableItem.vue'

  export default {
    name: 'TablePagination',
    data(){
      return{
        currentPage:1,
        pageSizes:[10, 20, 30, 40, 50],
      }
    },
    computed:{
      ...mapGetters([
        'name'
      ]),
      pageInfo(){
        return this.$store.getters.pageData;
      },
      pagePageCurrentPage(){
        return this.$store.getters.pageNum
      },
      pagePageTotal(){
        return this.$store.getters.pageTotal
      },
      pagePageSize(){
        return this.$store.getters.pageSize
      },
    },
    watch:{
      pageInfo(){
        console.log(this.pageInfo)
      },
      pagePageSize(){
        console.log(this.pagePageSize)
      }
    },
    components:{},
    props: [],
    created(){},
    methods: {
      handleSizeChange(val) {
        this.$store.dispatch("page/setPagePageSize", val);
        this.$emit('listpagechange');
      },
      handleCurrentChange(val) {
        this.$store.dispatch("page/setPageCurrentPage", val);
        this.$emit('listpagechange');
      }
    }
  }
</script>

<style scoped>
  .table-pagination-box{
    text-align: right;
  }
</style>
