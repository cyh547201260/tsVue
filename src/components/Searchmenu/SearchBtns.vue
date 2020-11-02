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
        var needUpKeys = ['advanced_search',',keyword_search'];
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
            "page_size": 20,
            "page_num": 1
          }
        }

        for(let i in this.filtersOptions[0]){
          var inobj = this.filtersOptions[0][i];

          if(needUpKeys.indexOf(i) != -1){
            for(let j in inobj){
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




        getTableDataList(obj).then(res => {
          console.log(res)
        })


      },
      searchMenuReset(){
        for(var i in this.filtersOptions[0]['advanced_search']){
          this.filtersOptions[0]['advanced_search'][i]['item_value'] = '';
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
