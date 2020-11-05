<template>
  <div class="case-detail-content-card">
    <div class="history-operation-content">
      <history-operation-title-tab></history-operation-title-tab>
      <history-operation-table-box></history-operation-table-box>
      <history-operation-pagination></history-operation-pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HistoryOperationTitleTab from './HistoryOperationTitleTab.vue'
import HistoryOperationTableBox  from './HistoryOperationTableBox.vue'
import HistoryOperationPagination from './HistoryOperationPagination.vue'

export default {
  name: 'HistoryOperationContent',
  data(){
    return{

    }
  },
  components: {HistoryOperationTitleTab,HistoryOperationTableBox,HistoryOperationPagination},
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
