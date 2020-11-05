<template>
  <div class="adjustment-info-detail-btn-box">
     <el-button type="primary" size="small">明细</el-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: '',
  data(){
    return{
    }
  },
  props:[],
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
  .adjustment-info-detail-btn-box{
    text-align: right;
    margin-top: 16px;
  }
</style>
