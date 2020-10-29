<template>
  <div>
    <div class="search-input-item" v-show="filterHighOpenState">
      <ins-date-picker-muti-option class="filter-input-item" :timerangetype="timeRangeType" :daterangeval="dateRangeVal"></ins-date-picker-muti-option>

      <template v-for="listItem in menuBtnList">
        <el-select  class="filter-input-item simple-select-item" v-model="listItem.val" clearable :placeholder="'请选择'+listItem.list.name">
          <el-option v-for="item in listItem.list.list" :key="item.code" :label="item.name" :value="item.code"></el-option>
        </el-select>
      </template>

      <search-btns></search-btns>

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

        menuBtnList:{
          insurCompany:{
            val:'',
            list:{
              name:'保险公司',
              list:{1:{name:'太平洋保险',code:1},2:{name:'人寿保险',code:2},3:{name:'阳光保险',code:3}}
            }
          },
          caseState:{
            val:'',
            list:{
              name:'案件状态',
              list:{1:{name:'初审',code:1},2:{name:'复核',code:2},3:{name:'打款',code:3}}
            }
          },
          examPerson:{
            val:'',
            list:{
              name:'审核人员',
              list:{1:{name:'张三',code:1},2:{name:'李四',code:2},3:{name:'王五',code:3}}
            }
          },
          productType:{
            val:'',
            list:{
              name:'产品类型',
              list:{1:{name:'门急诊',code:1},2:{name:'住院',code:2},3:{name:'重疾',code:3}}
            }
          }
        },




        dateRangeVal:'',
        timeRangeType:'',
      }
    },
    computed:{
      filterHighOpenState(){
        return this.$store.getters.highLevelOpenStatus;
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
