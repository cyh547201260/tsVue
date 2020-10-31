<template>
  <div class="document-info-list-other-list-box">
    <div class="other-list-title">其他单证</div>
    <div class="other-list-box">
      <template v-for="item in 20">

        <document-info-list-other-list-item></document-info-list-other-list-item>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DocumentInfoListOtherListItem from './DocumentInfoListOtherListItem.vue'

export default {
  name: 'DocumentInfoListOtherListBox',
  data(){
    return{

    }
  },
  components: {DocumentInfoListOtherListItem},
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
  .other-list-title{
    font-size: 14px;
    color: #606266;
    margin-bottom: 16px;
  }
  .other-list-box{
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    position: relative;
  }
</style>
