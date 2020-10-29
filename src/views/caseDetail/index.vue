<template>
  <div class="case-detail-box">
    <breadcrumb></breadcrumb>
    123123<br />123123<br />123123<br />123123<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    123123<br />123123<br />123123<br />123123<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    123123<br />123123<br />123123<br />123123<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    123123<br />123123<br />123123<br />123123<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    123123<br />123123<br />123123<br />123123<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    123123<br />123123<br />123123<br />123123<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    123123<br />123123<br />123123<br />123123<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    123123<br />123123<br />123123<br />123123<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    123123<br />123123<br />123123<br />123123<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    123123<br />123123<br />123123<br />123123<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    123123<br />123123<br />123123<br />123123<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    123123<br />123123<br />123123<br />123123<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

    123123<br />123123<br />123123<br />123123<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    123123<br />123123<br />123123<br />123123<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getApps,getMenusList } from '@/api/nav'
import Breadcrumb from '../../components/Breadcrumb/index.vue'

export default {
  name: 'CaseDetail',
  data(){
    return{

    }
  },
  components: {Breadcrumb},
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
  .case-detail-box{
    padding: 16px 35px 62px 15px;
  }
</style>
