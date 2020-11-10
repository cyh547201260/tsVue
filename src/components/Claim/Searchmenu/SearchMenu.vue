<template>
  <div class="search-menu-box">
    <div class="search-box-title">案件查询</div>
    <basic-search @parentgetlist="listpagechange" @keywordsearch="keyWordSearch"></basic-search>

  </div>
</template>

<script>
  import BasicSearch from './BasicSearch.vue'

  export default {
    name: 'SearchMenu',
    components: {
      BasicSearch
    },
    props: {
    },
    methods: {
      listpagechange(){
        this.$emit('listpagechange')
      },
      keyWordSearch(){
        this.$emit('keywordsearchfun')
      }
    }
  }
</script>

<style scoped>
  .search-box-title{
    font-size: 14px;
    color: #333;
    margin-bottom: 16px;
  }
  .search-menu-box{
    padding: 16px;
  }


</style>
