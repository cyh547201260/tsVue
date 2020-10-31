<template>
  <div class="basic-field-special">
    <ul>
      <li v-for="item in data.list" v-html="item"></li>
    </ul>
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
  .basic-field-special{
    margin-left: 10px;
  }
  .basic-field-special ul{
    list-style: none;
    padding-left: 0;
    margin: 0;
    font-size: 14px;
    color: #333;
  }
  .basic-field-special ul li{
    line-height: 1.4;
  }
</style>
