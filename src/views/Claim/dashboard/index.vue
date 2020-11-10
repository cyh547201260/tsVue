<template>
  <div class="dashboard-container">
    <div class="main-body-cont-box-card">
      <search-menu @listpagechange="getListData()" @keywordsearchfun="keywordSearchFunGet"></search-menu>
    </div>
    <div class="main-body-cont-box-card">
      <data-table :showpagination="showPagination" :tabledataobj="tableDataList" :tablekeysobj="filtersOptions['title']" :tablecellwidth="tableCellWidth"></data-table>
    </div>
    <div class="main-body-cont-box-card" v-if="showPagination">
      <table-pagination @listpagechange="getListData()" :tablecellwidth="tableCellWidth"></table-pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getFilterOptions,getTableDataList } from '@/api/list'
import { getInfo } from '@/api/user'

import Layout from '@/layout'
import qs from 'qs'
import SearchMenu from '../../components/Claim/Searchmenu/SearchMenu.vue'
import DataTable from '../../components/Public/DataTable/DataTable.vue'
import TablePagination from '../../components/Public/DataTable/TablePagination.vue'

export default {
  name: 'Dashboard',
  data(){
    return{
      tableCellWidth:[70,70,110,155,220,200,80,120,100,85,160,160,80]
    }
  },
  components: {
    SearchMenu,DataTable,TablePagination
  },
  computed: {
    ...mapGetters([
      'name'
    ]),
    filtersOptions(){
      return this.$store.getters.filterOptions;
    },
    tableDataList(){
      console.log('-------')
      console.log(this.$store.getters.tableDataList[0]['list_data'])
      console.log('-------')
      return this.$store.getters.tableDataList[0]['list_data'];
    },
    tableKeysObjData(){
      return this.filtersOptions.hasOwnProperty('title') ? this.filtersOptions['title'] : {};
    },
    pagePageCurrentPage(){
      return this.$store.getters.currentPage
    },
    pagePageTotal(){
      return this.$store.getters.pageTotal
    },
    pagePageSize(){
      return this.$store.getters.pageSize
    },
    showPagination(){
      return Math.ceil(this.pagePageTotal/this.pagePageSize) > 0;
    }
  },
  created() {
    this.getFilterOptions();
  },
  methods: {
    //获取筛选条件
    getFilterOptions() {
      getFilterOptions().then(res => {
        for(var i in res.data[0]){
          if(['advanced_search','keyword_search'].indexOf(i) != -1){
            for(var j in res.data[0][i]){
              res.data[0][i][j]['item_value'] = ''
            }
          }
        }
        this.$store.dispatch("data/setListFilterOptions", res.data[0]);
        this.searchMenuGet()
      })
    },
    //获取表格列表
    searchMenuGet(){
      var needUpKeys = ['advanced_search','keyword_search'];
      var obj = {
        "menu_api_key": "firstTrial",
        "keyword_search": [],
        "advanced_search": [],
        // "tab": {
        //   "item_name": "案件状态",
        //   "item_api_key": "claim_status",
        //   "value": 1
        // },
        "pagination": {
          "page_size": this.pagePageSize,
          "page_num": this.pagePageCurrentPage
        }
      }

      for(let i in this.filtersOptions){
        if(needUpKeys.indexOf(i) != -1){
          var inobj = this.filtersOptions[i];
          for(let j in inobj){
          console.log('----SSS',inobj[j])
            if(inobj[j]['item_value']){
              var subObj = {
                  "item_name": inobj[j]['item_name'],
                  "item_api_key": inobj[j]['item_api_key'],
                  "value": inobj[j]['item_value'],
              }
              obj[i].push(subObj);
            }
          }
        }
      }
      console.log(obj)
      // obj.advanced_search =

      getTableDataList(obj).then(res => {
        this.$store.dispatch("data/setTableDataList", res.data);
        //设置总条数
        this.$store.dispatch("page/setPageTotal", res.pagination.total);
        //设置每页条数
        this.$store.dispatch("page/setPagePageSize", res.pagination.page_size);
      })

    },
    getListData(){
      this.searchMenuGet();
    },
    keywordSearchFunGet(){
      this.searchMenuGet();
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 16px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.main-body-cont-box-card{
  background: white;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 16px;
}
</style>
