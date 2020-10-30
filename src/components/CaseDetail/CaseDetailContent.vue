<template>
  <div class="case-detail-content-box">
    <template v-for="item in contObj">
      <case-detail-content-card :infoblock="item"></case-detail-content-card>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CaseDetailContentCard from './CaseDetailContentCard.vue'

export default {
  name: 'CaseDetailContent',
  data(){
    return{
      contObj:[
        {title:'基本信息'},
        {title:'单证信息'},
        {title:'理算信息'},
        {title:'历史操作记录'},
        {title:'操作信息'},

      ]
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
  }
</style>
