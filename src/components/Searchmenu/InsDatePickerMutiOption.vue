<template>
  <div class="ins-datepicker-muti-box">
      <el-date-picker
        class="ins-datepicker-multi-option"
        v-model="daterangeval"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions">
      </el-date-picker>
  </div>
</template>

<script>
  export default {
    name: 'InsDatePickerMutiOption',
    props: {
      daterangeval:{
        type:String,
        default:''
      },
      timerangetype:{
        type:String,
        default:'',
      }
    },
    data(){
      return{

        pickerOptions: {
          shortcuts: [{
            text: '初审通过时间',
            onClick(picker) {
              this.timerangetype = '1';
            }
          }, {
            text: '申请理赔时间',
            onClick(picker) {
              this.timerangetype = '2';
            }
          }, {
            text: '结案时间',
            onClick(picker) {
              this.timerangetype = '3';
            }
          }, {
            text: '发送保司时间',
            onClick(picker) {
              this.timerangetype = '1';
            }
          }]
        },
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .ins-datepicker-muti-box{
    position: relative;
  }
</style>
