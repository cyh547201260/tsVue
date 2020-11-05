<template>
  <div>
    <div class="search-input-item" v-show="filterHighOpenState">
      <template v-if="filtersOptions.hasOwnProperty('advanced_search')">
        <template v-for="item in filtersOptions['advanced_search']">
          <template v-if="item.item_type == 6">
            <ins-date-picker-muti-option class="filter-input-item" :dataobj="filtersOptions['advanced_search']"  :timedata="item" @timechange="selectTimeChange()"></ins-date-picker-muti-option>
          </template>
          <template v-if="item.item_type == 2 && item.item_api_key != 'time_type'">
              <el-select  class="filter-input-item simple-select-item" @change="resuChange" v-model="item.item_value" clearable :placeholder="item.placeholder">
                <el-option v-for="(inItem,key) in item.options" :key="key" :label="inItem.dict_value" :value="inItem.dict_key"></el-option>
              </el-select>
          </template>
        </template>
      </template>

      <search-btns @parentgetlist="parentgetlist" v-if="filtersOptions.hasOwnProperty('advanced_search')"></search-btns>

    </div>
  </div>
</template>

<script>
  import InsDatePickerMutiOption from './InsDatePickerMutiOption.vue'
  import SearchBtns from './SearchBtns.vue'
  export default {
    name: 'HighSearch',
    data(){
      return{
        dateRangeVal:'',
        timeRangeType:'',
      }
    },
    computed:{
      filterHighOpenState(){
        return this.$store.getters.highLevelOpenStatus;
      },
      filtersOptions(){
         return this.$store.getters.filterOptions;
      },
      menuListValArr(){
         var arr = {};
         for(var i in this.filtersOptions['advanced_search']){
           arr[this.filtersOptions['advanced_search'][i]['item_api_key']] = '';
         }
         console.log(arr)
         return arr;
      }
    },
    components:{InsDatePickerMutiOption,SearchBtns},
    props: {
      togglestate:{
        type:Boolean,
        default: false,
      }
    },
    mounted(){
      console.log(this.togglestate)
    },
    methods: {
      parentgetlist(){
        this.$emit('parentgetlist')
      },
      resuChange(){
        console.log(this.filtersOptions.advanced_search)
      },
      selectTimeChange(val,event){
        console.log(event)
        console.log(val)
      }
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
    margin-top: 16px;
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
  .filter-input-item:not(:last-child){
    margin-right: 17px;
  }
  .simple-select-item{
    width: 170px;
    min-width: 100px;
  }
</style>
