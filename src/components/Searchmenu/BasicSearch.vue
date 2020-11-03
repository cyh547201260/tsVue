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
      @select="handleSelect"
      >
        <template slot-scope="{ item }">
          <div class="name">{{ item.value }}</div>
          <span class="addr">{{ item.address }}</span>
        </template>
      </el-autocomplete>
      <span class="high-filter-btn" @click="filterToggle()" v-if="filtersOptions.hasOwnProperty('advanced_search') && filtersOptions.advanced_search">高级筛选<i class="el-select__caret el-input__icon is-reverse el-icon-arrow-up"  :class="basicFilterClassStr" ></i></span>
    </div>
    <high-search :togglestate="filterHighOpenState"></high-search>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import HighSearch from './HighSearch.vue'

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
      filterToggle(){
        this.$store.dispatch("app/setHighLevelOpenStatus");
        this.basicFilterClassStr = (this.filterHighOpenState ? '' : 'el-icon-arrow-up-reserve');
      },
      handleSelect(){
        console.log(123)
      },
      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      basicSearchGetFun(queryString, cb) {
        console.log(queryString)
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

</style>
