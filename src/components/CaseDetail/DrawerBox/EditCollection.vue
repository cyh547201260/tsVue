<template>
  <div class="edit-collection">
    <el-form ref="editCollectionForm" label-width="70px">
      <template v-for="item in editCollectionData">
        <el-form-item :label="item.label">
          <!-- 文本 -->
          <template v-if="item.item_type == 1">
            <span v-text="item.value"></span>
          </template>
          <!-- 输入框 -->
          <template v-if="item.item_type == 2">
            <el-input v-model="item.value" :placeholder="item.placeholder"></el-input>
          </template>
          <!-- 级联选择器 -->
          <template v-if="item.item_type == 3">
            <el-cascader v-model="item.value" :options="item.options"></el-cascader>
          </template>
          <!-- 级联选择器 -->
          <template v-if="item.item_type == 4">
            <el-checkbox-group v-model="item.value">
              <template v-for="opItem in item.options">
                <el-checkbox :label="opItem.label" :value="opItem.value"></el-checkbox>
              </template>
            </el-checkbox-group>
          </template>
        </el-form-item>
      </template>
    </el-form>
    <div class="edit-collection-bot-btn-box">
      <el-button type="info" plain @click="boxClose()">取消</el-button>
      <el-button type="primary" @click="boxSave()">保存</el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'EditCollection',
  data(){
    return{
      editCollectionData:[
        {
          label:'收款人',
          value:'阿呆',
          item_type:1
        },
        {
          label:'银行账号',
          value:'',
          item_type:2,
          placeholder:'请输入银行账号'
        },
        {
          label:'开户银行',
          value:'',
          item_type:2,
          placeholder:'请输入开户银行'
        },
        {
          label:'开户地址',
          value:'',
          item_type:3,
          options:[{
            label:'北京',
            value:'北京',
            children:[{
              label:'北京',
              value:'北京'
            }]
          }]
        },
        {
          label:'修改类型',
          value:[],
          item_type:4,
          options:[{
            label:'修改本次案件',
            value:1
          },{
            label:'修改默认',
            value:2
          },{
            label:'修改理赔中案件',
            value:3
          }]
        }
      ]
    }
  },
  props:[],
  components: {},
  computed: {
    ...mapGetters([
      'name'
    ]),

  },
  created() {
  },
  methods: {
    boxClose(){
      this.$confirm('表单内容已修改，关闭后已修改内容不保存','确定关闭弹窗？',{type: 'warning'})
      .then(_ => {
        this.$emit('drawerclose');
      })
      .catch(_ => {});

    },
    boxSave(){
      console.log('save');
      this.boxClose()
    }
  }
}

</script>

<style lang="scss" scoped>
  .edit-collection{
    padding: 0 42px 0 16px;
  }
</style>
<style>
  .edit-collection .el-form-item__label{
    color: #a4abb3;
    font-weight: normal;
  }
  .edit-collection .el-form-item{
    margin-bottom: 14px;
  }
  .edit-collection .el-cascader{
    width: 100%;
  }
  .edit-collection .el-checkbox{
    margin-right: 7px;
  }
  .edit-collection-bot-btn-box{
    text-align: right;
    position: absolute;
    bottom: 25px;
    width: 100%;
    right: 25px;
  }
</style>
