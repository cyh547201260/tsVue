<template>
  <div class="dashboard-container">
    <div class="main-body-cont-box-card">
      <search-menu></search-menu>
    </div>
    <div class="main-body-cont-box-card">
      <data-table :tablecellwidth="tableCellWidth"></data-table>
    </div>
    <div class="main-body-cont-box-card">
      <table-pagination :tablecellwidth="tableCellWidth"></table-pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getFilterOptions } from '@/api/list'
import { getInfo } from '@/api/user'

import Layout from '@/layout'
import qs from 'qs'
import SearchMenu from '../../components/Searchmenu/SearchMenu.vue'
import DataTable from '../../components/DataTable/DataTable.vue'
import TablePagination from '../../components/DataTable/TablePagination.vue'

export default {
  name: 'Dashboard',
  data(){
    return{
      tableCellWidth:[70,70,110,155,220,210,80,120,100,85,160,160,80]
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
        this.$store.dispatch("data/setListFilterOptions", res.data);
      })
    },
    //
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
