<template>
  <div class="apps-list-item">
    <div class="apps-item-img-box">
      <img :src="appitem.photo" />
    </div>
    <div>
      <span v-text="appitem.name"></span>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  props:['appitem'],
  created() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
