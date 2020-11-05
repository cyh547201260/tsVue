<template>
  <div class="search-btns-box">
      <el-button type="primary" size="small" @click="searchMenuGet()">查询</el-button>
      <el-button type="info" plain  size="small" @click="searchMenuReset()">重置</el-button>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex'
  import { getTableDataList } from '@/api/list'

  export default {
    name: 'SearchBtns',
    data(){
      return{}
    },
    computed:{
      ...mapGetters([
        'sidebar',
        'avatar'
      ]),
      filtersOptions(){
        return this.$store.getters.filterOptions;
      }
    },
    components:{},
    props: {},
    mounted(){},
    methods: {
      searchMenuGet(){
        this.$emit('parentgetlist')
      },
      searchMenuReset(){
        for(var i in this.filtersOptions['advanced_search']){
          this.filtersOptions['advanced_search'][i]['item_value'] = '';
        }
      }
    }
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
