<template>
  <div class="case-detail-content-box">
    <case-detail-content-card></case-detail-content-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CaseDetailContentCard from './CaseDetailContentCard.vue'

export default {
  name: 'CaseDetailContent',
  data(){
    return{

    }
  },
  components: {CaseDetailContentCard},
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
    height: 500px;
  }
</style>
