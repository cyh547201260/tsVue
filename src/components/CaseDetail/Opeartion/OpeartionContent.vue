<template>
  <div class="opeartion-content-box">
    <el-form ref="form" label-position="left" :model="form" label-width="100px">
      <el-form-item label="对接类型">
        <el-cascader v-model="form.type" :options="options" @change="handleChange"></el-cascader>
      </el-form-item>
      <el-form-item label="计算类型">
        <el-radio-group v-model="operationNotes">
          <template v-for="item in operationNotesOptions">
            <el-radio :label="item.value">{{item.label}}</el-radio>
          </template>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="上传单证">
        <el-upload
          action="#"
          list-type="picture-card"
          :auto-upload="false">
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{file}">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url" alt=""
              >
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleDownload(file)"
                >
                  <i class="el-icon-download"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>


      <el-form-item label="业务操作备注">
        <el-input
          type="textarea"
          :rows="3"
          placeholder="备注 (仅业务人员可见)"
          v-model="textarea">
        </el-input>

      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'OpeartionContent',
  data(){
    return{
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,



      form:{
        type:''
      },
      operationNotes:'1',
      operationNotesOptions:[
        {label:'标准',value:'1'},{label:'扩展乙类',value:'2'},{label:'扩展丙类',value:'3'}
      ],
      options:[{
        value:'1',
        label:'医疗',
        children:[{
          value:'1_1',
          label:'行人在运输事故中的损伤',
        },{
          value:'1_2',
          label:'行人',
        },{
          value:'1_3',
          label:'行人在运输',
        }]
      },{
        value:'2',
        label:'意外',
        children:[{
          value:'2_1',
          label:'骑脚踏车人员在运输事故中',
        },{
          value:'2_2',
          label:'骑脚踏车人员事故中',
        },{
          value:'2_3',
          label:'骑脚踏运输事故中',
        }]
      }]

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
    handleChange(value){
      console.log(value);
    },
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    }
  }
}

</script>

<style lang="scss" scoped>
  .case-detail-content-box{
    width: 100%;
  }
</style>
