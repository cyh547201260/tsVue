<template>
  <div class="basic-info-list-item">
    <div class="basic-info-list-item-title">
      <span>人员信息</span>
    </div>
    <div class="basic-info-list-item-content">
123
    </div>
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
  .basic-info-list-item{
    display: flex;
    display: -webkit-flex;

  }
  .basic-info-list-item-title{
    width: 64px;

  }
  .basic-info-list-item-content{
    flex: 1;
    -webkit-flex: 1;
  }
</style>
