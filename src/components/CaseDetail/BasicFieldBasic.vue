<template>
  <div class="basic-field-basic-box">
    <div class="basic-field-basic-title" v-text="data.title"></div>
    <div class="basic-field-basic-value" v-text="data.value"></div>
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
  props:['data'],
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
  .basic-field-basic-box{
    width: 317px;
    display: flex;
    display: -webkit-flex;
    margin-bottom: 20px;
  }
  .basic-field-basic-box .basic-field-basic-title{
    width: 70px;
    text-align: right;
    color: #909399;
    font-size: 14px;
  }
  .basic-field-basic-value{
    flex: 1;
    -webkit-flex: 1;
    font-size: 14px;
    color: #333;
    text-align: left;
    margin-left: 13px;
  }
</style>
