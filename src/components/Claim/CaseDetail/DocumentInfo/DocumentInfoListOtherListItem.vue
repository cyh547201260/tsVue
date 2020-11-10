<template>
  <div class="document-info-list-other-list-item">
    <div class="other-list-item-top">
      <div class="item-top-img-box" >
        <el-popover placement="right" width="282"  trigger="hover"><!-- -->
          <img style="width: 100%;cursor: pointer;" @click="openDocumentImage" src="https://fengyuanchen.github.io/viewerjs/images/thumbnails/tibet-1.jpg" alt="">
          <img slot="reference" src="https://fengyuanchen.github.io/viewerjs/images/thumbnails/tibet-1.jpg" alt="" />
        </el-popover>
      </div>
      <div class="item-top-img-desc">
        <el-scrollbar class='desc-wrapper' wrap-class="scrollbar-wrapper">
          <span class="img-desc-span">
            单据不清 - 请将xxxxxxx单据不清 - 请将xxxxxxx单据不清 - 请将xxxxxxx单据不清 - 请将xxxxxxx单据不清 - 请将xxxxxxx单据不清 - 请将xxxxxxx单据不清 - 请将xxxxxxx
          </span>
        </el-scrollbar>
      </div>
    </div>
    <div class="other-list-item-bot">
      <div class="other-list-item-bot-btn">
        <el-button type="text">编辑发票</el-button>
      </div>
      <div class="other-list-item-bot-btn">
        <el-button type="text">单证标记</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'InfoContentBody',
  data(){
    return{

    }
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
    openDocumentImage(){
      this.$store.dispatch('detail/setImageBoxState',true);
    }
  }
}

</script>

<style lang="scss" scoped>
  .document-info-list-other-list-item{
    width: 166px;
    height: 200px;
    border-radius: 4px;
    overflow: hidden;
    background: #f5f7fa;
    margin-right: 13px;
    margin-bottom: 16px;
  }
  .other-list-item-top{
    height: 166px;
    position: relative;
  }
  .item-top-img-box{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  .item-top-img-box img{
    width: 100%;
    height: 100%;
    background: pink;
  }
  .item-top-img-desc{
    position: absolute;
    width: 100%;
    height: 45%;
    left: 0;
    bottom: 0;
    background: rgba(0,0,0,.5);
    color: white;
    font-size: 14px;
  }
  .other-list-item-bot{
    height: 34px;
    display: flex;
    background: rgba(46, 198, 181, .09);
  }
  .other-list-item-bot-btn{
    flex: 1;
    text-align: center;
  }
  .other-list-item-bot-btn .el-button{
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .desc-wrapper{
    overflow-x: hidden;
    height: 100%;
  }
  .img-desc-span{
    padding: 6px;
    display: inline-block;
  }

</style>
<style>
  .item-top-img-desc .el-scrollbar__bar.is-vertical{
        background: rgba(155,155,155,.5);
  }
  .item-top-img-desc .el-scrollbar__wrap{
    overflow: hidden;
  }
  .item-top-img-desc .el-scrollbar__thumb{
    background: white;
  }
  .item-top-img-desc .scrollbar-wrapper.el-scrollbar__wrap{
    margin: 0 !important;
  }
</style>
