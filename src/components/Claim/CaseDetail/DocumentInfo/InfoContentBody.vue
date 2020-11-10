<template>
  <div class="document-info-content-body">
    <info-title-box></info-title-box>
    <document-info-list></document-info-list>
    <document-info-list-other-list-box></document-info-list-other-list-box>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import InfoTitleBox from './InfoTitleBox.vue'
import DocumentInfoList from './DocumentInfoList.vue'
import DocumentInfoListOtherListBox from './DocumentInfoListOtherListBox.vue'


export default {
  name: 'InfoContentBody',
  data(){
    return{

    }
  },
  components: {InfoTitleBox,DocumentInfoList,DocumentInfoListOtherListBox},
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
  .case-info-title-box{
    display: flex;
    display: -webkit-flex;
  }
  .case-info-title-left{
    flex: 1;
  }
  .case-info-title-right{
    flex: 1;
  }
</style>
