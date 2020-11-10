<template>
  <div class="nav-top-box">
    <div class="nav-top-left">
      <el-button type="primary" size="small">返回</el-button>
      <breadcrumb style="transform: translateY(2px);"></breadcrumb>
    </div>
    <div class="nav-top-right">
      <el-button type="primary" size="small">全部方案</el-button>
      <el-button class="top-btn-group-mar" type="primary" size="small">历史赔案</el-button>
      <div class="full-screen-btn top-btn-group-mar"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADpUlEQVRYR8VXTWhcVRT+zrn35WVqImm0kOysupKUKlNIsqiYhQiFLiooUtEui7iqBRFxkYWICNWVlC5rsUhEuwgUxMVIBZtABy3NUq27BoppMLGTN+/ec+Q+O2X65s28p22Zuxnm3e+c893zey+h6lKl+ctfj7aSKDawtoWWrRlDQbzlvdZQcx7O1eI0uTz/yg6ItIrqTMGg9UKjYTexOWaM1IRtKT7oYnHqPbcmMLH9w8KCG6R/kEKaXbk47tqtR6oazhsKROxI7e/VuUNbAAo9UkxAF7nerE/KjoyUeajKPo9yu1lvboAWJY/vIVC/ciZK3NRk5GCqKK+KSS18bNc3mgeOp90y9xLQRZ5ZfW7PgzbeMRhIrM3+fLPbE90EqH5l+bEH5fZ+nsnCceDwn52cuEtgduXio22XjlV16f3gRmy0vTp36K+gIyMQSm3LbOwpynYP85Qy72fIbWFSeCiL/5VJf8+TEKUnhc3TMCAWJQHvIpGrBv63bmyojnE/eTOUaEbg2caFCYp4V9GpvDHvQOmkEq6S4gZCh1FpWPXn8nhH5g0iXgBUlTBNiv0gPWW8/zSP1VRu/7JwZJOgSvUfv53qV+uBgAo9T8BeYT0eeb9S5v7UmDkWOqPAdWK9VEQgeKF58OV1mv9pqbYj8e5+SjMPhCW6AvBpAt5ldd/1wwvZlxT4BJC3wDQXcEUEwvdRTm7RIPcHUIdAUJISzxDzWSg+tOIu9ISA7REQPlCRY5HKWrdsEeEQBqo3lh+XqH/H82Tezk6h/vPwm7I+QYj2WXHLBQQOK9JrkdAfGfmcbB7PKbfpmcbSVBzF3M+liSY27MUUDxwqRfJlskmaCNUvfTP9f4dNWTKW7YdEHD6BshCUneJ+9v8NQUkSOjXTwYglf+O/GiuTzZKwtAw5OpFVgaSf3SnLF6E80/nfTcoHLMma8f77DJuTLeqGlRtR6AOezasAvUfQYyz+Wl6hsNmnoLOAfmzEL5X1gawRVWnFwRAJtZTwJhMdJZ9e7xcONdFeUT1Pii+UtdavE95txQFQYRi9BmALTl43LOtlueCFp2D5SwDjIP1q8DAqH8cnwHQSwKYCSmEcMs6zcx/1hMDa91VwtIMDMAHRUwY+y5/O6hnHYaPfhSRRsvEI7faOPKkoi2hCvB2T9nTGDKsyJsykxGSsmqStt/LYngvJHWbDvZJlJIZ8Kc04DPda3smSYT5MupJ1iE+zLhbDfJzeW+YP6Xn+D6oWOjuV5VByAAAAAElFTkSuQmCC" /></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getApps,getMenusList } from '@/api/nav'
import Breadcrumb from '../../Breadcrumb/index.vue'

export default {
  name: 'NavCrumbTop',
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
  .nav-top-box{
    width: 100%;
    height: 48px;
    background: white;
    border-radius: 8;
    display: flex;
    display: -webkit-flex;
    padding: 0 23px 0 15px;
    border-radius: 8px;
  }
  .nav-top-left{
    flex: 1;
    -webkit-flex: 1;
    overflow: hidden;
    line-height: 48px;
  }
  .nav-top-left .el-button{
    // height: 40px;
  }
  .nav-top-right{
    line-height: 48px;
    flex: 2;
    -webkit-flex: 2;
    text-align: right;
  }
  .full-screen-btn{
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
    transform: translateY(-1px);
    cursor: pointer;
  }
  .full-screen-btn img{
    width: 100%;
    height: 100%;
  }
  .top-btn-group-mar{
    margin-left: 16px;
  }
</style>
