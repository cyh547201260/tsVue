<template>
  <div>
    <template v-if="infoblock.title == '历史操作记录'">
      <history-operation></history-operation>
    </template>
    <template v-else>
      <div class="case-detail-content-card">
        <case-detail-content-card-title v-if="infoblock.title != '历史操作记录'" :title="infoblock.title"></case-detail-content-card-title>
        <div class="case-detail-content-card-content-box">
          <template v-if="infoblock.title == '单证信息'">
            <document-info-content-body></document-info-content-body>
          </template>
          <template v-if="infoblock.title == '理算信息'">
            <adjustment-info-content-body></adjustment-info-content-body>
          </template>
          <template v-if="infoblock.title == '案件操作'">
            <opeartion-content></opeartion-content>
          </template>
          <template v-if="infoblock.title == '基本信息'">
            <case-detail-info-basic></case-detail-info-basic>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CaseDetailContentCardTitle from './CaseDetailContentCardTitle.vue'
import CaseDetailInfoBasic from './BasicInfo/CaseDetailInfoBasic.vue'
import DocumentInfoContentBody from './DocumentInfo/InfoContentBody.vue'
import AdjustmentInfoContentBody from './AdjustmentInfo/AdjustmentInfoContent.vue'
import OpeartionContent from './Opeartion/OpeartionContent.vue'
import HistoryOperation from './HistoryOperation/HistoryOperationContent.vue'

export default {
  name: 'CaseDetailContentCard',
  data(){
    return{
    }
  },
  props:['infoblock'],
  components: {CaseDetailContentCardTitle,CaseDetailInfoBasic,DocumentInfoContentBody,AdjustmentInfoContentBody,OpeartionContent, HistoryOperation},
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  created() {
  },
  methods: {
  }
}

</script>

<style lang="scss" scoped>
  .case-detail-content-card{
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    background-color: white;
    margin-bottom: 16px;
  }
  .case-detail-content-card-content-box{
    padding: 24px;
  }
</style>
