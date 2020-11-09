<template>
  <div class="document-marking">
    <div class="document-marking-from-box">
      <el-radio-group v-model="documentMarkType">
        <el-radio-button label="1">无效发票</el-radio-button>
        <el-radio-button label="2">其他类型标记</el-radio-button>
      </el-radio-group>
      <template v-if="documentMarkType == 1">
        <div class="drawer-mid-title">特别约定</div>
        <el-radio-group class="docuement-mark-special-radios-box" v-model="documentMarkSpecial">
          <template v-for="item in documentMarkSpecialOptions">
            <el-radio :label="item.value">{{item.label}}</el-radio>
          </template>
        </el-radio-group>
        <el-input
          type="textarea"
          :rows="4"
          :resize="false"
          placeholder="输入其他单据名称"
          :disabled="otherDocumentDisabled"
          v-model="invalidOtnerDocument">
        </el-input>
      </template>
      <template v-else>
        <div class="drawer-mid-title">缺少单据</div>
        <el-checkbox-group  class="docuement-mark-special-radios-box" v-model="documentMarkLack">
          <template v-for="item in documentMarkLackOptions">
            <el-checkbox :label="item.value">{{item.label}}</el-checkbox>
          </template>
        </el-checkbox-group>
        <el-input type="textarea" :rows="4" :resize="false" placeholder="输入其他单据名称" v-model="otherOtnerDocument"></el-input>
        <div class="input-bottom-tip">
          <p class="input-bottom-tip-item">注意：仅需输入所缺的单据名称</p>
          <p class="input-bottom-tip-item">示例：费用明细清单、b超检查报告单</p>
        </div>
        <div class="drawer-mid-title">单据不清</div>
        <el-input type="textarea" :rows="4" :resize="false" placeholder="请填写单据不清理由" v-model="unclearDocuement"></el-input>
        <div class="input-bottom-tip">
          <p class="input-bottom-tip-item">示例：请将2019/03/20的病历拍摄完整清晰后上传</p>
        </div>
      </template>
    </div>
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
      documentMarkType:'2',    //单据标记类型
      invalidOtnerDocument:'',  //无效发票-其他发票
      otherOtnerDocument:'',    //其他类型标记-其他单据名称
      unclearDocuement:'',      //其他类型标记 - 单据不清理由
      documentMarkSpecial:'1',  //特别约定
      documentMarkSpecialOptions:[
        {value:'1',label:'在之前案件已报销'},
        {value:'2',label:'未经医保结算'},
        {value:'3',label:'非本人发票'},
        {value:'4',label:'就诊医院不符合协议要求'},
        {value:'5',label:'与上传保障责任不符'},
        {value:'6',label:'不在保期'},
        {value:'7',label:'其他'},
      ],
      documentMarkLack:[],     //缺少单据
      documentMarkLackOptions:[
        {value:'1',label:'发票'},
        {value:'2',label:'病历'},
        {value:'3',label:'意外事故说明'},
        {value:'4',label:'医保结算单'},
        {value:'5',label:'处方'},
        {value:'6',label:'其他'},
      ],
      otherDocumentDisabled:true,
    }
  },
  props:[],
  components: {},
  computed: {
    ...mapGetters([
      'name'
    ]),

  },
  watch:{
    documentMarkSpecial(){
      if(this.documentMarkSpecial == 7){
        this.otherDocumentDisabled = false
      }else{
        this.otherDocumentDisabled = true
      }
    }
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
  .docuement-mark-special-radios-box{
    display: flex;
    flex-direction: column;
  }
  .docuement-mark-special-radios-box .el-radio,
  .docuement-mark-special-radios-box .el-checkbox{
    flex: 1;
    margin-bottom: 14px;
  }
  .drawer-mid-title{
    margin: 16px 0;
    font-size: 14px;
    color: #333;
    font-weight: 600;
  }
  .input-bottom-tip{
    font-size: 12px;
    color: #A4ABB3;
    padding: 7px 0;
  }
  .input-bottom-tip p{
    margin: 0;
    line-height: 1.4;
  }
</style>
