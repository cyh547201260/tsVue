<template>
  <div class="case-detail-content-card-title">
    <span v-text="title"></span>
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
  props:['title'],
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
  .case-detail-content-card-title{
    width: 100%;
    height: 48px;
    line-height: 48px;
    font-size: 16px;
    color: #333;
    background: rgba(46, 198, 181, .1);
  }
  .case-detail-content-card-title span{
    padding-left: 23px;
  }
</style>
