<template>
  <div class="case-detail-info-basic">
    <div class="basic-edit-box" @click="bankInfoEdit">
      <title-btn :btnicon="'el-icon-edit'" :btnname="'编辑'"></title-btn>
    </div>
    <template v-for="item in basicInfo">
      <basic-info-list-item :infodata="item"></basic-info-list-item>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BasicInfoListItem from './BasicInfoListItem.vue'
import TitleBtn from '../AdjustmentInfo/AdjustmentInfoTitleBtn.vue'

export default {
  name: 'CaseDetailInfoBasic',
  data(){
    return{
      basicInfo:[
        {
          title:'人员信息',
          list:[
            {title:'人员姓名',value:'阿呆',highlight:true},
            {title:'医保地址',value:'北京-北京',highlight:true},
            {title:'医保类型',value:'城镇职工',highlight:true},
            {title:'手机号码',value:'18888888888',highlight:false},
            {title:'证件号码',value:'身份证-110101199602182541',highlight:false},
            {title:'被保人类型',value:'主保险人',highlight:false},
          ]
        },
        {
          title:'收款信息',
          list:[
            {title:'银行名称',value:'中国银行',highlight:false},
            {title:'开户地区',value:'北京-北京',highlight:false},
            {title:'银行账号',value:'2020/02/18 - 2021/12/23',highlight:true},
            {title:'收款人',value:'张三丰',highlight:false},
            {title:'证件号码',value:'身份证-110101199602182541',highlight:false},
            {title:'被保人类型',value:'主保险人',highlight:false},
          ]
        },
        {
          title:'特别约定',
          list:[
            '1.起保人数：该方案参保需满足以下条件之一： （1）起保人数大于20人；（2）费用大于2000',
             '2.参保年龄：<span style="color:red">18-65周岁，平均年龄小于40周岁（不含）</span>',
              '3.职业类别：1-3类',
               '4.男性参保人数不高于总参保人数的60%',
                '5.最高可以购买3份',
                 '6.起保人数：该方案参保需满足以下条件之一： （1）起保人数大于20人；（2）费用大于2000',
                  '7.参保年龄：18-65周岁，平均年龄小于40周岁（不含）',
                   '8.职业类别：1-3类 ',
                   '9.男性参保人数不高于总参保人数的60%',
                    '10.最高可以购买3份'
          ]
        },

      ]
    }
  },
  components: {BasicInfoListItem,TitleBtn},
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  created() {
  },
  methods: {
    bankInfoEdit(){
      console.log(12313)
      this.$store.dispatch("detail/setDrawerOpenState", true);
    }
  }
}

</script>

<style lang="scss" scoped>
  .basic-edit-box{
    text-align: right;
    padding-bottom: 10px;
    margin-top: -10px;
  }
</style>
