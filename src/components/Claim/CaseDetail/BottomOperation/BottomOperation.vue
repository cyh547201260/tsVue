<template>
  <div class="bottom-operation-box">
    <div class="bottom-operation-box-left">
      <el-select filterable  v-model="bottomCaseState" placeholder="请选择状态">
        <el-option
          v-for="item in bottomStatesList"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <el-select style="margin-left: 16px;" filterable v-model="personValue" placeholder="请选择">
        <el-option-group
          v-for="group in personsList"
          :key="group.label"
          :label="group.label">
          <el-option
            v-for="item in group.options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-option-group>
      </el-select>
      <el-button style="margin-left: 16px;"  type="primary">指派</el-button>
    </div>
    <div class="bottom-operation-box-right">
      <el-button style="margin-left: 16px;"  type="primary">保存</el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BootmOperation',
  data(){
    return{
      bottomCaseState:'',
      bottomStatesList:[
        {label:'等待审核',value:'1'},
        {label:'初审受理',value:'2'},
        {label:'待录入',value:'3'},
        {label:'录入信息有误',value:'4'},
        {label:'待打款审批',value:'5'},
      ],
      personValue:'',
      personsList: [
        {
          label: '理赔一组(阳光)',
          options: [{
            value: 'Shanghai',
            label: '李林燕'
          }, {
            value: 'Beijing',
            label: '顾梦圆'
          }]
        }, {
          label: '理赔二组（复星/易安/太保）',
          options: [{
            value: 'Chengdu',
            label: '胡英男'
          }, {
            value: 'Shenzhen',
            label: '马银霞'
          }, {
            value: 'Guangzhou',
            label: '吕立成'
          }, {
            value: 'Dalian',
            label: '杨照宇'
          }]
        }],
    }
  },
  components: {},
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
  .bottom-operation-box{
    position: fixed;
    width: calc(100vw - 347px);
    height: 64px;
    line-height: 64px;
    border-radius: 8px;
    background: white;
    bottom: 0;
    padding: 0 24px;
    display: flex;
  }
  .bottom-operation-box-right{
    flex: 1;
    text-align: right;
  }
</style>
