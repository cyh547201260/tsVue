<template>
  <div class="case-detail-content-box">
    <template v-for="item in contObj">
      <case-detail-content-card :infoblock="item"></case-detail-content-card>
    </template>


    <bottom-operation></bottom-operation>

    <drawer-box></drawer-box>
    <document-image-box></document-image-box>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BottomOperation from './BottomOperation/BottomOperation.vue'
import CaseDetailContentCard from './CaseDetailContentCard.vue'
import DrawerBox from './DrawerBox/DrawerBox.vue'
import DocumentImageBox from './DocumentImageBox/DocumentImageBox.vue'

export default {
  name: 'CaseDetailContent',
  data(){
    return{
      contObj:[
        {title:'基本信息'},
        {title:'单证信息'},
        {title:'理算信息'},
        {title:'历史操作记录'},
        {title:'案件操作'},

      ]
    }
  },
  components: {CaseDetailContentCard,BottomOperation,DrawerBox,DocumentImageBox},
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
  .case-detail-content-box{
    width: 100%;
  }
</style>
