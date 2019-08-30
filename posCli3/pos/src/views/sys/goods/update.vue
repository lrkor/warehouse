<template>
  <div class="list">
    <div class="nav"><span class="goBack" @click="goBack">商品管理</span> / 编辑</div>
    <div class="add-goods">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="商品名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="商品价格">
          <el-input v-model="form.price"></el-input>
        </el-form-item>
        <el-form-item label="常用商品">
          <el-select v-model="form.isOften" placeholder="请选择">
            <el-option label="是" value="1"></el-option>
            <el-option label="否" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品类别">
          <el-select v-model="form.type" placeholder="请选择">
            <el-option label="汉堡" value="0"></el-option>
            <el-option label="饮料" value="1"></el-option>
            <el-option label="小食" value="2"></el-option>
            <el-option label="套餐" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品图片">
          <el-upload
            class="upload-demo"
            :limit="1"
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
  import url from '@/api/serviceAPI.config.js'
  import {post,get} from '@/server/request.js'

    export default {
        name: "update",
        data() {
            return {
                fileList: [],
                id:'',
                uploadUrl: url.upload,
                form: {
                    name: '',
                    price: '',
                    imgUrl: '',
                    isOften: '1',
                    type: '1'
                }
            }
        },
        //数据初始化完毕自动调用方法
        created() {
            //获取传入的参数
            let param = this.$route.params;
            let id = param.id;
            this.id = id;
            this.get(id);
        },
        methods: {
            async get(id){
                let res = await get(url.goods.get,{id});
                this.form = res.data[0];
                this.form.type = this.form.type.toString();
                this.form.isOften = this.form.type.toString();
                let arr = [
                    {
                        name: res.data[0].name,
                        url: res.data[0].imgUrl
                    }
                ];
                this.fileList = arr;
            },
            goBack() {
                this.$router.go(-1);
            },
            async onSubmit() {
                let data = this.form;
                data.id = this.id;
                let res = await post(url.goods.update,{data: this.form});
                if(res.code==='200'){
                    this.$message({
                        message: '修改成功!',
                        type: 'success'
                    });
                    this.$router.go(-1);
                }

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
  .list {
    background-color: #fff;
  }

  .nav {
    background-color: #fff;
    padding: 15px 20px;
  }

  .goBack:hover {
    cursor: pointer;
    color: #2084da;
  }

  .add-goods {
    width: 1100px;
    margin: 20px auto;
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
