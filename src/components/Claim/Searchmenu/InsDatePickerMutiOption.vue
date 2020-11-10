<template>
  <div class="ins-datepicker-muti-box">
    <div class="ins-datepicker-bot">
      <el-date-picker
        ref="insDatepickerMulti"
        class="ins-datepicker-multi-option"
        v-model="timedata.item_value"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        @change="timechange"
        :popper-class="'ins-sel-date-picker'"
        :picker-options="timeTypeShortcuts">
      </el-date-picker>
    </div>
    <div class="ins-datepicker-top">
      <el-input
          :placeholder="timedata.placeholder"
          prefix-icon="el-icon-search"
          clearable
          ref="insDatepickerTop"
          @focus="dateTopInputFocus"
          @blur="dateTopInputBlur"
          @clear="clearDateInput"
          v-model="formatDaterangeval">
        </el-input>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'InsDatePickerMutiOption',
    props: ['timedata','dataobj'],
    computed:{
      formatDaterangeval:{
        get(){
          return this.formatDate(this.timedata.item_value)
        },
        set(){
          return this.formatDate(this.timedata.item_value)
        }
      },
      timeTypeArr(){
        var arr = [];
        for(var i in this.dataobj){
          if(this.dataobj[i].item_api_key == 'time_type'){
            arr = this.dataobj[i].options;
            this.dateTypeData = this.dataobj[i];
          }
        }
        return arr;
      },
      timeTypeShortcuts(){
        var arr = [];
        var _this = this;
        for(let i in this.timeTypeArr){
          var obj = {
            text:this.timeTypeArr[i].dict_value,
            onClick(){
               _this.dateTypeOptionSelect = _this.timeTypeArr[i].dict_key;
              // this.selectTimeTypeFun(this.timeTypeArr[i].dict_key)
              _this.dateTypeData.item_value = _this.timeTypeArr[i].dict_key;
              console.log(_this.dateTypeOptionSelect)
              console.log(_this.dateTypeData)
            }
          }
          arr.push(obj)
        }

        var resultObj = {
          shortcuts: arr
        }

        return resultObj;

      }
    },
    data(){
      return{
        dateShow:'',
        daterangeval:'',
        val:'',
        dateTypeOptionSelect:'',
        dateTypeData:'',
      }
    },
    methods: {
      timechange(){
        console.log(this.timedata)
        // this.$emit('timechange',this.timedata.item_value)
      },
      clearDateInput(){
        this.timedata.item_value = '';
        this.dateTypeData.item_value = '';
      },
      formatDate(arr){
        if(arr.length > 0){
          var start = arr[0].getFullYear() + '-' + (arr[0].getMonth() + 1< 10 ? ('0' + (arr[0].getMonth() + 1)) : (arr[0].getMonth() + 1)) + '-' + (arr[0].getDate() < 10 ? ('0' + arr[0].getDate()) : arr[0].getDate());
          var end = arr[1].getFullYear() + '-' + (arr[1].getMonth() + 1 < 10 ? ('0' + (arr[1].getMonth() + 1)) : (arr[1].getMonth() + 1)) + '-' + (arr[1].getDate() < 10 ? ('0' + arr[1].getDate()) : arr[1].getDate());
          return start +' - ' + end
        }else{
          return ''
        }
      },
      dateTopInputFocus(){
        this.$refs.insDatepickerTop.blur();
      },
      dateTopInputBlur(){
        setTimeout(()=>{
          this.$refs.insDatepickerMulti.focus();
        },90)
      },
      selectTimeTypeFun(val){
        this.dateTypeOptionSelect = val;
      }
    }
  }
</script>

<style scoped>
  .ins-datepicker-muti-box{
    position: relative;
    width: 264px;

  }
  .ins-datepicker-top{
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
    /* pointer-events: none; */
  }
  .ins-datepicker-top .el-input{
    cursor:pointer
  }
  .ins-datepicker-bot{
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .ins-datepicker-multi-option{
    width: 254px;
  }
</style>
