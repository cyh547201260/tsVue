<template>
  <div class="case-detail-page-box">
      <nav-crumb-top class="nav-crumb-top-ref"></nav-crumb-top>
      <case-info-title></case-info-title>
      <case-detail-body></case-detail-body>


  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getApps,getMenusList } from '@/api/nav'
import NavCrumbTop from '../../../components/Claim/CaseDetail/NavCrumbTop.vue'
import CaseDetailBody from '../../../components/Claim/CaseDetail/CaseDetailBody.vue'
import CaseInfoTitle from '../../../components/Claim/CaseDetail/CaseInfoTitle.vue'

export default {
  name: 'CaseDetail',
  data(){
    return{

    }
  },
  components: {NavCrumbTop,CaseInfoTitle,CaseDetailBody},
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
  .case-detail-page-box{
    padding: 16px 35px 62px 15px;
  }
  .nav-crumb-top-ref{
    position: fixed;
    width: calc(100vw - 267px);
    z-index: 1996;
  }
</style>
