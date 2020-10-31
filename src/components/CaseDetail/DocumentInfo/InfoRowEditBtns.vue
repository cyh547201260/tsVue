<template>
  <div class="document-info-edit-btns-box">
    <div class="btns-cont-box">
      <el-button type="primary" plain size="small">编辑发票</el-button>
      <el-button type="primary" plain size="small">单证标记</el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'InfoRowEditBtns',
  data(){
    return{}
  },
  components: {},
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
  .document-info-edit-btns-box{
    display: table;
    height: 100%;
  }
  .document-info-edit-btns-box .el-button{
    margin-left: 0;
    margin-bottom: 16px;
  }
  .document-info-edit-btns-box .el-button:last-child{
    margin-bottom: 0;
  }
  .btns-cont-box{
    display: table-cell;
    height: 100%;
    vertical-align: middle;
  }
</style>
