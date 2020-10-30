<template>
  <div class="case-detail-info-basic">
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CaseDetailContentCard',
  data(){
    return{

    }
  },
  components: {},
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
