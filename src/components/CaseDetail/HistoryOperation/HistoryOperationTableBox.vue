<template>
  <div class="history-operation-table-box">
    <history-operation-table></history-operation-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HistoryOperationTable from './HistoryOperationTable.vue'


export default {
  name: 'HistoryOperationTableBox',
  data(){
    return{}
  },
  components: {HistoryOperationTable},
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  created() {
  },
  methods: {}
}

</script>

<style lang="scss" scoped>
  .history-operation-table-box{
    padding: 0 24px;
  }
</style>
