<template>
  <div class="case-info-title">
    <span>8000929</span> — <span>李杰</span> — <span>延迟受理</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'InfoTitle',
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
  .case-info-title{
    font-size: 18px;
    color: #2a303c;
    font-weight: 600;
    margin: 64px 0 16px 0;
  }
</style>
