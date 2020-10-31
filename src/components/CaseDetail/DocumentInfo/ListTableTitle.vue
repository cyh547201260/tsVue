<template>
  <div class="document-info-list-table-title">
    <div class="info-cell table-title-cell-1">图片</div>
    <div class="info-cell table-title-cell-2">发票内容</div>
    <div class="info-cell table-title-cell-3">标记信息</div>
    <div class="info-cell table-title-cell-4">操作</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import InfoTitleBox from './InfoTitleBox.vue'
import DocumentInfoListTitle from './DocumentInfoListTitle.vue'

export default {
  name: 'InfoContentBody',
  data(){
    return{

    }
  },
  components: {InfoTitleBox,DocumentInfoListTitle},
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
  .document-info-list-table-title{
    display: flex;
    display: -webkit-flex;
  }
  .document-info-list-table-title .info-cell{
    padding: 18px 27px 16px 9px;
    color: #606266;
    font-size: 14px;
  }
  .document-info-list-table-title .info-cell.table-title-cell-1{
    width: 9.039%;
  }
  .document-info-list-table-title .info-cell.table-title-cell-2{
    width: 66.76%;
  }
  .document-info-list-table-title .info-cell.table-title-cell-3{
    width: 14.783%;
  }
  .document-info-list-table-title .info-cell.table-title-cell-4{
    width: 9.416%;
  }
</style>
