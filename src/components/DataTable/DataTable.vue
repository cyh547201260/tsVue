<template>
  <div class="data-table-box" :class="filterHighOpenState ? 'data-table-filter-open' : 'data-table-filter-close'" ref="datatablebox" id="dataTableBox">
    <el-table :data="tableData" fit stripe style="width: 100%" height="100%">
      <template v-for="(item,key) in tableKeys">
        <table-item :cellwidth="getCellWidth(key)" :tablecellwidth="tablecellwidth" :tabledata="tableData" :tablekey="item" :indexkey="key"></table-item>
      </template>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="goCaseDetail(scope.row)" type="primary" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>

  import TableItem from './TableItem.vue'

  export default {
    name: 'SearchBtns',
    data(){
      return{
        bodyClientWidth:0,
        tableKeys:[{
          name:'id',
          label:'案件ID'
        },{
          name:'name',
          label:'姓名'
        },{
          name:'phone',
          label:'手机号'
        },{
          name:'certcode',
          label:'身份证号'
        },{
          name:'insurcompany',
          label:'公司名称'
        },{
          name:'company',
          label:'保险公司'
        },{
          name:'amount',
          label:'申请金额'
        },{
          name:'product_type',
          label:'产品类型'
        },{
          name:'state',
          label:'状态'
        },{
          name:'person',
          label:'审核人员'
        },{
          name:'create_time',
          label:'申请时间'
        },{
          name:'end_time',
          label:'结案时间'
        }],
        tableData: [
          {id:'1232321',name:'阿呆',phone:'155555555555',certcode:'142111448841445541',insurcompany:'北京保险极客有限公司上海分公司',company:'复星俩呢和健康保险股份公司',amount:'678.00',product_type:'补充医疗-门急诊',state:'1',person:'理解',create_time:'2020-10-08 12:20',end_time:'2020-11-08 12:22'},
          {id:'1232321',name:'阿呆',phone:'155555555555',certcode:'142111448841445541',insurcompany:'北京保险极客有限公司上海分公司',company:'复星俩呢和健康保险股份公司',amount:'678.00',product_type:'补充医疗-门急诊',state:'2',person:'理解',create_time:'2020-10-08 12:20',end_time:'2020-11-08 12:22'},
          {id:'1232321',name:'阿呆',phone:'155555555555',certcode:'142111448841445541',insurcompany:'北京保险极客有限公司上海分公司',company:'复星俩呢和健康保险股份公司',amount:'678.00',product_type:'补充医疗-门急诊',state:'3',person:'理解',create_time:'2020-10-08 12:20',end_time:'2020-11-08 12:22'},
          {id:'1232321',name:'阿呆',phone:'155555555555',certcode:'142111448841445541',insurcompany:'北京保险极客有限公司上海分公司',company:'复星俩呢和健康保险股份公司',amount:'678.00',product_type:'补充医疗-门急诊',state:'4',person:'理解',create_time:'2020-10-08 12:20',end_time:'2020-11-08 12:22'},
          {id:'1232321',name:'阿呆',phone:'155555555555',certcode:'142111448841445541',insurcompany:'北京保险极客有限公司上海分公司',company:'复星俩呢和健康保险股份公司',amount:'678.00',product_type:'补充医疗-门急诊',state:'5',person:'理解',create_time:'2020-10-08 12:20',end_time:'2020-11-08 12:22'},
          {id:'1232321',name:'阿呆',phone:'155555555555',certcode:'142111448841445541',insurcompany:'北京保险极客有限公司上海分公司',company:'复星俩呢和健康保险股份公司',amount:'678.00',product_type:'补充医疗-门急诊',state:'1',person:'理解',create_time:'2020-10-08 12:20',end_time:'2020-11-08 12:22'},
          {id:'1232321',name:'阿呆',phone:'155555555555',certcode:'142111448841445541',insurcompany:'北京保险极客有限公司上海分公司',company:'复星俩呢和健康保险股份公司',amount:'678.00',product_type:'补充医疗-门急诊',state:'1',person:'理解',create_time:'2020-10-08 12:20',end_time:'2020-11-08 12:22'},
          {id:'1232321',name:'阿呆',phone:'155555555555',certcode:'142111448841445541',insurcompany:'北京保险极客有限公司上海分公司',company:'复星俩呢和健康保险股份公司',amount:'678.00',product_type:'补充医疗-门急诊',state:'1',person:'理解',create_time:'2020-10-08 12:20',end_time:'2020-11-08 12:22'},
          {id:'1232321',name:'阿呆',phone:'155555555555',certcode:'142111448841445541',insurcompany:'北京保险极客有限公司上海分公司',company:'复星俩呢和健康保险股份公司',amount:'678.00',product_type:'补充医疗-门急诊',state:'1',person:'理解',create_time:'2020-10-08 12:20',end_time:'2020-11-08 12:22'},

        ]
      }
    },
    components:{TableItem},
    computed:{
      filterHighOpenState(){
        return this.$store.getters.highLevelOpenStatus;
      }
    },
    props: ['tablecellwidth'],
    created(){
      this.getClientWidth();
    },
    methods: {
      getClientWidth(){
        this.bodyClientWidth = document.body.offsetWidth -232;
      },
      getCellWidth(cellkey){
          return this.tablecellwidth[cellkey]
        // console.log(this.$refs.datatablebox.clientWidth)
      },
      goCaseDetail(data){
        this.$router.push({path:'/caseDetail/index', query:{id:data.id}})
        console.log(data)
      }
    }
  }
</script>

<style scoped>
  .search-btns-box{
    width: 230px;
    white-space: nowrap;
    transition: height 1s;
  }
  .search-btns-box .el-button{
    margin-top: 4px;
  }
  .el-table td, .el-table th{
    padding: 8px 0 !important;
  }
  .data-table-box.data-table-filter-close{
    height: calc(100vh - 299px);
  }
  .data-table-box.data-table-filter-open{
    height: calc(100vh - 355px);
  }
</style>
