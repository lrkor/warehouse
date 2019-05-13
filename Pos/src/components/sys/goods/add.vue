<template>
  <div class="add">
    <div class="nav"><span class="goBack" @click="goBack">商品管理</span> / 新增</div>
    <div class="add-goods">
      <el-form ref="form" :model="form" label-width="90px">
        <el-form-item label="商品名称：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="商品价格：">
          <el-input v-model="form.price"></el-input>
        </el-form-item>
        <el-form-item label="常用商品：">
          <el-select v-model="form.isOften" placeholder="请选择">
            <el-option label="是" value="1"></el-option>
            <el-option label="否" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品类别：">
          <el-select v-model="form.type" placeholder="请选择">
            <el-option label="汉堡" value="0"></el-option>
            <el-option label="饮料" value="1"></el-option>
            <el-option label="小食" value="2"></el-option>
            <el-option label="套餐" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品图片：">
          <el-upload
            class="upload-demo"
            :action="uploadUrl"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-success="handleSuccess"
            :file-list="fileList"
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
  </div>
</template>

<script>
  import url from '@/serviceAPI.config.js'
  import axios from 'axios';

  export default {
    name: "add",
    data() {
      return {
        fileList: [],
        uploadUrl: url.upload,
        form: {
          name: '',
          price: '',
          imgUrl: '',
          isOften: '',
          type: ''
        }
      }
    },
    methods: {
      goBack(){
        this.$router.go(-1);
      },
      onSubmit() {
        axios.post(url.goods.goodsAdd, {
          data: this.form
        })
          .then(response => {
            let data = response.data;
            if (data.code == '200') {
              this.$message({
                message: '添加成功!',
                type: 'success'
              });
              this.$router.go(-1);
            } else {
              this.$message({
                message: '添加失败!',
                type: 'warning'
              });
            }
          })
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleSuccess(file) {
        console.log(file);
        this.form.imgUrl = file.data.url;
        console.log(this.form.imgUrl);
      }
    },
  }
</script>

<style scoped>
  .add {
    background-color: #fff;
  }
  .nav{
    background-color: #fff;
    padding: 15px 20px;
  }
  .goBack:hover{
    cursor: pointer;
    color: #2084da;
  }
  .add-goods {
    padding: 20px 0;
    background-color: #fff;
  }

  .el-form {
    padding: 0 15px;
  }

  .el-input, .el-select {
    width: 300px;
  }
</style>
