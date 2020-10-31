<template>
  <div class="document-info-list-box">
    <template v-for="item in 2">
      <document-info-list-item></document-info-list-item>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import InfoTitleBox from './InfoTitleBox.vue'
import DocumentInfoListTitle from './DocumentInfoListTitle.vue'
import ListTableTitle from './ListTableTitle.vue'
import ListTableRow from './ListTableRow.vue'
import DocumentInfoListItem from './DocumentInfoListItem.vue'

export default {
  name: 'InfoContentBody',
  data(){
    return{

    }
  },
  components: {InfoTitleBox,DocumentInfoListTitle,ListTableTitle,ListTableRow,DocumentInfoListItem},
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
