<template>
  <div class="document-info-list-title">
    <span class="list-title-left-line"></span><span class="list-title-time-val">2020/07/24 17:18:29</span><span>用户上传</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import InfoTitleBox from './InfoTitleBox.vue'

export default {
  name: 'InfoContentBody',
  data(){
    return{

    }
  },
  components: {InfoTitleBox},
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
  .document-info-list-title{
    height: 48px;
    line-height: 48px;
    background: #F5F7FA;
    border-radius: 4px;
    display: flex;
    display: -webkit-flex;
    font-size: 14px;
    color: #2a303c;
  }
  .list-title-left-line{
    display: inline-block;
    width: 3px;
    height: 14px;
    border-radius: 2px;
    background: #2ec6b5;
    margin: 17px 14px 0 8px;
  }
  .list-title-time-val{
    margin-right: 5px;
  }
</style>
