<template>
  <div>
    <template v-if="filtersOptions.hasOwnProperty('keyword_search')"></template>
    <div class="search-input-item" v-if="filtersOptions.keyword_search">
      <el-autocomplete
      prefix-icon="el-icon-search"
      class="basic-search-input"
      v-model="filtersOptions.keyword_search[0]['item_value']"
      :fetch-suggestions="basicSearchGetFun"
      :placeholder="filtersOptions.keyword_search[0].placeholder"
      :trigger-on-focus="false"
      @select="keywordSearchListItemFun"
      >
        <template slot-scope="{ item }">
          <div class="basic-search-list-box">
            <div class="list-left">
              <span class="list-left-row-name" v-text="item.item_name"></span>
            </div>
            <div class="list-right">
              <p>搜索结果<span v-text="item.total" class="list-right-row-total"></span>条</p>
            </div>
          </div>
        </template>
      </el-autocomplete>
      <span class="high-filter-btn" @click="filterToggle()" v-if="filtersOptions.hasOwnProperty('advanced_search') && filtersOptions.advanced_search">高级筛选<i class="el-select__caret el-input__icon is-reverse el-icon-arrow-up"  :class="basicFilterClassStr" ></i></span>
    </div>
    <high-search @parentgetlist="parentgetlist" :togglestate="filterHighOpenState"></high-search>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import HighSearch from './HighSearch.vue'
  import { getKeywordSearchList } from '@/api/list'

  export default {
    name: 'BasicSearch',
    components: {
      HighSearch
    },
    data(){
      return{
        state:'',
        highSearchToggleState:false,
        basicFilterClassStr: '',
        keySearchVal:'',
        timeout:''
      }
    },
    computed:{
      ...mapGetters([
        'sidebar',
        'avatar'
      ]),
      filterHighOpenState(){
        return this.$store.getters.highLevelOpenStatus;
      },
      filtersOptions(){
        return this.$store.getters.filterOptions;
      }
    },
    mounted(){
      console.log(this.filtersOptions)
    },
    methods: {
      parentgetlist(){
        this.$emit('parentgetlist')
      },
      filterToggle(){
        this.$store.dispatch("app/setHighLevelOpenStatus");
        this.basicFilterClassStr = (this.filterHighOpenState ? '' : 'el-icon-arrow-up-reserve');
      },
      //点击关键词搜索item
      keywordSearchListItemFun(item){
        this.filtersOptions.keyword_search[0]['item_value'] = this.keySearchVal;
        this.filtersOptions.keyword_search[0]['item_api_key'] = item.item_api_key;
        this.filtersOptions.keyword_search[0]['item_name'] = item.item_name;
        this.$emit('keywordsearch');
      },
      basicSearchGetFun(queryString, cb) {
        console.log(queryString)
        // this.$store.dispatch("app/setHighLevelOpenStatus");
        console.log(this.filtersOptions)

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.keySearchVal = this.filtersOptions.keyword_search[0]['item_value'];
          var obj = {
            menu_api_key:'firstTrial',
            value:this.filtersOptions.keyword_search[0]['item_value']
          }
          getKeywordSearchList(obj).then(res => {
              console.log(res)
              if(res.code == 0){
                cb(res.data);
              }else{
                cb([])
              }
          })
        }, 800);
        // cb(result)
        // this.$emit('keywordsearch');
        // var restaurants = this.restaurants;
        // var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // // 调用 callback 返回建议列表的数据
        // cb(results);
      },
    }
  }
</script>

<style scoped>
  .search-box-title{
    font-size: 14px;
    color: #333;
  }
  .basic-search-input{
    width: 280px;
  }
  .search-input-item{
    display: flex;
    display: -webkit-flex;
  }
  .high-filter-btn{
    font-size: 14px;
    color: #333;
    margin-left: 25px;
    line-height: 25px;
    cursor: pointer;
    user-select: none;
  }
  .el-icon-arrow-up-reserve{
    transform: rotate(180deg);
    translate: all .5s;
  }
  .basic-search-list-box{
    display: flex;
  }
  .list-left{
    flex: 1;
    font-size: 14px;
    color: #606266;
  }
  .list-right{
    flex: 1;
    font-size: 14px;
    text-align: right;
    color: #606266;
  }
  .list-right p{
    margin: 0;
  }
  .list-right p .list-right-row-total{
    color: #00aca0;
    margin: 0 5px;
  }
</style>
