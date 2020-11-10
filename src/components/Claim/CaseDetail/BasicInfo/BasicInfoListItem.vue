<template>
  <div class="basic-info-list-item">
    <div class="basic-info-list-item-title">
      <span v-text="infodata.title"></span>
    </div>
    <div class="basic-info-list-item-content">
      <template v-if="infodata.title == '特别约定'">
        <basic-field-special :data="infodata"></basic-field-special>
      </template>
      <template v-else>
        <template v-for="item in infodata.list">
          <template v-if="item.highlight">
            <basic-field-highlight :data="item"></basic-field-highlight>
          </template>
          <template v-else>
            <basic-field-basic :data="item"></basic-field-basic>
          </template>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BasicFieldBasic from './BasicFieldBasic.vue'
import BasicFieldHighlight from './BasicFieldHighlight.vue'
import BasicFieldSpecial from './BasicFieldSpecial.vue'

export default {
  name: 'CaseDetailContentCard',
  data(){
    return{
    }
  },
  props:['infodata'],
  components: {BasicFieldBasic,BasicFieldHighlight,BasicFieldSpecial},
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
    font-size: 14px;
    color: #333;
    font-weight: 600;
  }
  .basic-info-list-item-content{
    flex: 1;
    -webkit-flex: 1;
    display: flex;
    flex-wrap: wrap;
  }
</style>
