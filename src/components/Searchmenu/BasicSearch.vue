<template>
  <div>
    <template v-if="filtersOptions[0].hasOwnProperty('keyword_search')"></template>
    <div class="search-input-item" v-if="filtersOptions[0].keyword_search">
      <el-autocomplete
      prefix-icon="el-icon-search"
      class="basic-search-input"
      v-model="filtersOptions[0].keyword_search[0]['item_value']"
      :fetch-suggestions="querySearchAsync"
      :placeholder="filtersOptions[0].keyword_search[0].placeholder"
      @select="handleSelect"
      ></el-autocomplete>
      <span class="high-filter-btn" @click="filterToggle()" v-if="filtersOptions[0].hasOwnProperty('advanced_search') && filtersOptions[0].advanced_search">高级筛选<i class="el-select__caret el-input__icon is-reverse el-icon-arrow-up"  :class="basicFilterClassStr" ></i></span>
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
