<template>
  <div class="adjustment-info-title-btn">
    <div class="title-btn-icon-box"><i :class="btnicon"></i></div> <span class="btn-name" v-text="btnname"></span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AdjustmentInfoTitle',
  data(){
    return{
    }
  },
  props:['btnicon','btnname'],
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
  .title-btn-icon-box{
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    text-align: center;
    line-height: 24px;
    background: rgba(46, 198, 181, .13);
    user-select: none;
  }
  .title-btn-icon-box i{
    color: #2EC6B5;
  }
  .btn-name{
    font-size: 14px;
    color: #2ec6b5;
    user-select: none;
  }
  .adjustment-info-title-btn{
    margin-left: 20px;
    cursor: pointer;
  }
  .adjustment-info-title-btn:hover{
    .btn-name{
      text-decoration: underline;
    }
  }

</style>
