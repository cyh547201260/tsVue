<template>
  <div class="case-detail-info-basic">
    <basic-info-list-item></basic-info-list-item>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BasicInfoListItem from './BasicInfoListItem.vue'

export default {
  name: 'CaseDetailInfoBasic',
  data(){
    return{

    }
  },
  components: {BasicInfoListItem},
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
</style>
