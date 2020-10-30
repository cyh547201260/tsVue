<template>
  <div class="case-detail-content-card">
    <case-detail-content-card-title :title="caseInfo.title"></case-detail-content-card-title>
    <div></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CaseDetailContentCardTitle from './CaseDetailContentCardTitle.vue'

export default {
  name: 'CaseDetailContentCard',
  data(){
    return{
      caseInfo:{
        title:'基本信息'
      },
    }
  },
  components: {CaseDetailContentCardTitle},
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
  }
</style>
