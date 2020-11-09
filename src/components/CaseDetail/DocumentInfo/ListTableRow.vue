<template>
  <div class="document-info-list-table-row">
    <div class="info-row table-title-row-1">
      <div class="row-image">
        <div class="row-image-cont-box">
          <el-popover placement="right" width="282"  trigger="hover"><!-- -->
            <img style="width: 100%;cursor: pointer;" @click="openDocumentImage" src="https://fengyuanchen.github.io/viewerjs/images/thumbnails/tibet-1.jpg" alt="">
            <img slot="reference" src="https://fengyuanchen.github.io/viewerjs/images/thumbnails/tibet-1.jpg" alt="" />
          </el-popover>
        </div>
      </div>
    </div>
    <div class="info-row table-title-row-2">
      <template v-for="item in list">
        <info-field :data="item"></info-field>
      </template>
    </div>
    <div class="info-row table-title-row-3">
      <div class="info-row-tag-content">
        <span>无效发票-就诊医院不符合协议要求</span>
      </div>
    </div>
    <div class="info-row table-title-row-4">
      <info-row-edit-btns></info-row-edit-btns>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import InfoTitleBox from './InfoTitleBox.vue'
import DocumentInfoListTitle from './DocumentInfoListTitle.vue'
import InfoField from './InfoField.vue'
import InfoRowEditBtns from './InfoRowEditBtns.vue'

export default {
  name: 'InfoContentBody',
  data(){
    return{
      list:[
        {title:'发票总金额',value:'233.12',highlight:true},
        {title:'发票号',value:'151215',highlight:true},
        {title:'医保类型',value:'城镇职工',highlight:true},
        {title:'手机号码',value:'18888888888',highlight:false},
        {title:'证件号码',value:'身份证-110101199602182541',highlight:false},
        {title:'被保人类型',value:'主保险人',highlight:false},
        {title:'手机号码',value:'18888888888',highlight:false},
        {title:'证件号码',value:'身份证-110101199602182541',highlight:false},
      ]
    }
  },
  components: {InfoTitleBox,DocumentInfoListTitle,InfoField,InfoRowEditBtns},
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  created() {
  },
  methods: {
    openDocumentImage(){
      this.$store.dispatch('detail/setImageBoxState',true);
    }
  }
}

</script>

<style lang="scss" scoped>
  .document-info-list-table-row{
    display: flex;
    display: -webkit-flex;
    padding: 20px 0;
    position: relative;
    align-items: center;
  }
  .document-info-list-table-row:nth-child(odd){
    background: #FAFAFA;
  }
  .document-info-list-table-row:before{
    position: absolute;
    content: ' ';
    border-top: 1px solid #EAEEF5;
    left: 0;
    top: -1px;
    right: 0;
  }
  .document-info-list-table-row:after{
    position: absolute;
    content: ' ';
    border-bottom: 1px solid #EAEEF5;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .row-image{
    margin-left: 8px;
  }
  .row-image-cont-box{
    display: inline-block;
    width: 80px;
    height: 80px;
    position: relative;
  }
  .row-image img{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: #F2F2F2;
  }
  .info-row{
    padding: 0 6px;
  }
  .document-info-list-table-row .info-row.table-title-row-1{
    width: 9.039%;
    height: 100%;
  }
  .document-info-list-table-row .info-row.table-title-row-2{
    width: 66.76%;
    display: flex;
    flex-wrap: wrap;
  }
  .document-info-list-table-row .info-row.table-title-row-3{
    width: 14.783%;
  }
  .document-info-list-table-row .info-row.table-title-row-4{
    width: 9.416%;
  }
  .info-row-tag-content{
    font-size: 14px;
    color: #2a303c;
    padding: 0 5px;
    height: 100%;
  }
  .info-row-tag-content span{
  }
</style>
