<template>
  <div>
    <div class="search-input-item">
      <el-autocomplete prefix-icon="el-icon-search" class="basic-search-input" v-model="state" :fetch-suggestions="querySearchAsync" placeholder="请输入关键词查询" @select="handleSelect"></el-autocomplete>
      <span class="high-filter-btn" @click="filterToggle()">高级筛选<i class="el-select__caret el-input__icon is-reverse el-icon-arrow-up"  :class="basicFilterClassStr" ></i></span>
    </div>
    <high-search :togglestate="highSearchToggleState"></high-search>
  </div>
</template>

<script>
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
        filterHighOpenState:false,
        basicFilterClassStr: 'el-icon-arrow-up-reserve',
      }
    },
    methods: {
      filterToggle(){
        this.filterHighOpenState = !this.filterHighOpenState;
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
