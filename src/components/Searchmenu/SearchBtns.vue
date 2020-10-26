<template>
  <div class="search-btns-box">
      <el-button type="primary" size="small">查询</el-button>
      <el-button type="info" plain  size="small">重置</el-button>
  </div>
</template>

<script>

  export default {
    name: 'SearchBtns',
    data(){
      return{}
    },
    components:{},
    props: {},
    mounted(){},
    methods: {}
  }
</script>

<style scoped>
  .search-btns-box{
    width: 230px;
    white-space: nowrap;
  }
  .search-btns-box .el-button{
    margin-top: 4px;
  }
</style>
