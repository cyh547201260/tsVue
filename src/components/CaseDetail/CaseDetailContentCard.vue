<template>
  <div class="case-detail-content-card">
    <case-detail-content-card-title :title="infoblock.title"></case-detail-content-card-title>
    <div class="case-detail-content-card-content-box">
      <case-detail-info-basic></case-detail-info-basic>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CaseDetailContentCardTitle from './CaseDetailContentCardTitle.vue'
import CaseDetailInfoBasic from './CaseDetailInfoBasic.vue'

export default {
  name: 'CaseDetailContentCard',
  data(){
    return{
    }
  },
  props:['infoblock'],
  components: {CaseDetailContentCardTitle,CaseDetailInfoBasic},
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
