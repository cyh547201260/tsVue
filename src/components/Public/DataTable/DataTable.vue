<template>
  <div class="data-table-box" ref="dataTableContentBox" :class="filterHighOpenState ? 'data-table-filter-open' : 'data-table-filter-close'" >
    <div style="width: 100%;height: 100%;" >
      <el-table :data="tabledataobj" class="data-table-ele" ref="dataTableBox" fit stripe :height="tableHeight">
          <template v-for="(item,key,index) in tablekeysobj">
            <table-item  :fullcellwidth="fullCellWidth"  :fullboxwidth="dataTableBoxWidth" :tableitemdataobj="tabledataobj" :tablecellwidth="tablecellwidth" :tabledata="tableData" :tablekey="item" :indexkey="key"></table-item>
          </template>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="goCaseDetail(scope.row)" type="primary" size="small">查看</el-button>
            </template>
          </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>

  import TableItem from './TableItem.vue'

  export default {
    name: 'SearchBtns',
    data(){
      return{
        bodyClientWidth:0,
        tableHeight:'100%',
        tableInitState:false,
        windowSizeChange:false
      }
    },
    components:{TableItem},
    computed:{
      filterHighOpenState(){
        if(this.tableInitState){
          this.getTableBoxHeight();
        }
        return this.$store.getters.highLevelOpenStatus;
      },
      tableData(){
        return this.$store.getters.tableDataList;
      },
      dataTableBoxWidth(){
        if(this.$refs.dataTableBox){
          return this.$refs.dataTableBox.$el.clientWidth -100;
        }else{
          return 0;
        }
      },
      fullCellWidth(){
        var num = 0;
        this.windowSizeChange = true;
        console.log('fdfffffffffffffffff')
        for(var i = 0; i < this.tablekeysobj.length ; i++){
          num += this.tablecellwidth[i];
        }
        if(num < this.dataTableBoxWidth){
          return num;
        }else{
          return 0;
        }
      },
    },
    props: ['tablecellwidth','tablekeysobj','tabledataobj','showpagination'],
    created(){
      this.getClientWidth();
    },
    watch:{
      tabledataobj(){
        this.tableInitState = true;
        this.getTableBoxHeight();
      }
    },
    mounted() {
      this.listenWindowResize();
    },
    methods: {
      listenWindowResize(){
        var _this = this;
        window.onresize = function(){
          this.windowSizeChange = true;
        }
      },
      getClientWidth(){
        this.bodyClientWidth = document.body.offsetWidth -232;
      },
      getTableBoxHeight(){
        setTimeout(() => {
          this.tableHeight = this.$refs.dataTableContentBox.clientHeight;
        },0)
      },
      goCaseDetail(data){
        this.$router.push({path:'/caseDetail/index', query:{id:data.id}})
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
  .data-table-ele{
    width: 100%;
  }
</style>
