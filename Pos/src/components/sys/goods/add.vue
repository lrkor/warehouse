<template>
  <div class="add-goods">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="商品名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input v-model="form.price"></el-input>
      </el-form-item>
      <el-form-item label="商品图片">
        <el-upload
          class="upload-demo"
          :action="uploadUrl"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList2"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import url from '@/serviceAPI.config.js'
  import axios from 'axios';
  export default {
    name: "add",
    data(){
      return {
        fileList2: [],
        uploadUrl:url.upload,
        form: {
          name: '',
          price: '',
          imgUrl: '',
        }
      }
    },
    methods:{
      onSubmit() {
        console.log('submit!');
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    },
  }
</script>

<style scoped>
  .add-goods{
    width: 1100px;
    margin: 20px auto;
    padding: 20px 0;
    background-color: #fff;
  }
  .el-form{
    padding: 0 15px;
  }
  .el-input{
    width: 300px;
  }
</style>
