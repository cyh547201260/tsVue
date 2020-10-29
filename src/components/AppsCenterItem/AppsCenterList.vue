<template>
	<div class="apps-list-item-box">
    <template v-for="item in applist">
      <apps-center-item-el :appitem="item"></apps-center-item-el>
    </template>
	</div>
</template>

<script>

import AppsCenterItemEl from './AppsCenterItemEl.vue'
export default {
  data() {
    return {
    }
  },
  components:{AppsCenterItemEl},
  props:['applist'],
  created() {
  },
  mounted(){
    console.log('3123123213123')
    console.log(this.applist)

  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
	.apps-list-item-box{
		display: flex;
		display: -webkit-flex;
    padding: 20px 56px;
	}
</style>
