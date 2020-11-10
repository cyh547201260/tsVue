<template>
  <div class="case-info-title-box">
    <div class="case-info-title-left">
      <info-title-num></info-title-num>
    </div>
    <div class="case-info-title-right">
      <info-title-btn></info-title-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import InfoTitleNum from './InfoTitleNum.vue'
import InfoTitleBtn from './InfoTitleBtn.vue'

export default {
  name: 'CaseInfoTitle',
  data(){
    return{

    }
  },
  components: {InfoTitleNum,InfoTitleBtn},
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
    margin-bottom: 8px;
  }
  .case-info-title-left{
    flex: 1;
  }
  .case-info-title-right{
    flex: 1;
  }
</style>
