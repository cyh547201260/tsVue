<template>
  <div class="document-info-list-item">
    <document-info-list-title></document-info-list-title>
    <list-table-title></list-table-title>
    <template v-for="item in 3">
      <list-table-row></list-table-row>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import InfoTitleBox from './InfoTitleBox.vue'
import DocumentInfoListTitle from './DocumentInfoListTitle.vue'
import ListTableTitle from './ListTableTitle.vue'
import ListTableRow from './ListTableRow.vue'

export default {
  name: 'InfoContentBody',
  data(){
    return{

    }
  },
  components: {InfoTitleBox,DocumentInfoListTitle,ListTableTitle,ListTableRow},
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
  .document-info-list-item{
    margin-bottom: 24px;
  }

</style>
