<template>
  <div class="document-image-box" v-if="imageBoxState">
    <div class="document-image-content"  style="width: 100%;height: 100%;position: relative;">
      <div class="document-image-box-nav-btn document-image-box-pre" @click="imageBoxPre"><i class="el-icon-arrow-left"></i></div>
      <div class="document-image-box-nav-btn document-image-box-next"  @click="imageBoxNext"><i class="el-icon-arrow-right"></i></div>
      <div class="document-image-box-nav-btn document-image-box-more"  @click="imageBoxShowBasicInfo"><i class="el-icon-back"></i></div>
      <div class="document-image-box-close" @click="imageBoxHide()"><i class="el-icon-circle-close"></i></div>
       <div ref="image" id="image" style="width: 100%;height: 100%;position: relative;">
         <template v-for="i in 20">
          <img style="display: none;" src="https://fengyuanchen.github.io/viewerjs/images/thumbnails/tibet-1.jpg" alt="">
         </template>
       </div>
    </div>
    <div>
      <drawer-box></drawer-box>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import 'viewerjs/dist/viewer.css';
import Viewer from 'viewerjs';
import DrawerBox from '../DrawerBox/DrawerBox.vue'


export default {
  name: 'DocumentImageBox',
  data(){
    return{
      viewerObj:''
    }
  },
  props:[],
  components: {
    DrawerBox
  },
  computed: {
    ...mapGetters([
      'name'
    ]),
    imageBoxState(){
      return this.$store.getters.imageBoxState
    }
  },
  watch:{
    imageBoxState(){
      if(this.imageBoxState){
        this.initViewerObj();
      }
    }
  },
  mounted(){
  },
  created() {
  },
  methods: {
    initViewerObj(){
      setTimeout(() => {
        this.viewerObj = new Viewer(this.$refs.image, {
          keyboard:true,
          inline: true,
          loop:false,
          toolbar: {
            zoomIn: 1,
            zoomOut: 1,
            oneToOne: 1,
            rotateLeft: 1,
            rotateRight: 1,
          },
          viewed() {
            this.viewerObj.zoomTo(3);
          },
        });
      },100)
    },
    imageBoxHide(){
      // this.viewerObj.hide();
      this.$store.dispatch('detail/setImageBoxState',false);
    },
    imageBoxPre(){
      this.viewerObj.prev();
    },
    imageBoxNext(){
      this.viewerObj.next();
    },
    imageBoxShowBasicInfo(){
      this.$store.dispatch("detail/setDrawerOpenData", {state:true,size:'30%',type:'documentImageBasicInfo',title:'基本信息'});
    }
  }
}

</script>

<style lang="scss" scoped>
  .document-image-box{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 2002;
  }
  .document-image-box-mask{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0,0,0,.5);
  }
  .document-image-content{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  .document-image-box-close{
    width: 28px;
    height: 28px;
    position: absolute;
    top: 36px;
    right: 36px;
    color: white;
    z-index: 2003;
    cursor: pointer;
  }
  .document-image-box-close i.el-icon-circle-close{
    width: 28px;
    height: 28px;
    font-size: 28px;
  }
  .document-image-box-nav-btn {
    position: absolute;
    width: 34px;
    height: 34px;
    background: rgba(0,0,0,.35);
    border-radius: 50%;
    text-align: center;
    line-height: 34px;
    z-index: 2055;
    top: 50%;
    color: white;
    margin-top: -17px;
    cursor: pointer;
  }
  .document-image-box-nav-btn:hover{
    background: rgba(0,0,0,.5);;
  }
  .document-image-box-pre{
    left: 34px;
  }
  .document-image-box-next{
    right: 34px;
  }
  .document-image-box-more{
    top: auto;
    bottom: 120px;
    right: 34px;
  }
</style>
<style>
  .document-image-box .viewer-button.viewer-fullscreen{
    display: none;
  }
  .document-image-box .viewer-navbar{
    height: 100px;
    background: white;
  }
  .document-image-box .viewer-list > li{
    width: 84px;
    height: 84px;
  }
  .document-image-box .viewer-list > li img{
    width: 100%;
    height: 100%;
  }
  .document-image-box .viewer-list{
    height: 84px;
    padding-top: 8px;
  }
  .document-image-box .viewer-list > li + li{
    /* margin-left: 8px; */
  }
</style>
