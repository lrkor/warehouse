<template>
  <div class="add">
    <div class="nav"><span class="goBack" @click="goBack">用户管理</span> / 新增</div>
    <div class="add-user">
      <el-form ref="form" :model="form" label-width="90px">
        <el-form-item label="用户名称：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="登录账号：">
          <el-input v-model="form.userName"></el-input>
        </el-form-item>
        <el-form-item label="登录密码：" prop="pass">
          <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="身份类型：">
          <el-select v-model="form.type" placeholder="请选择">
            <el-option label="管理员" value="0"></el-option>
            <el-option label="游客" value="3"></el-option>
          </el-select>
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
        form: {
          name: '',
          userName: '',
          password: '',
          type: ''
        }
      }
    },
    methods: {
      goBack(){
        this.$router.go(-1);
      },
      onSubmit() {
        console.log(this.form);
        // axios.post(url.goodsAdd, {
        //   data: this.form
        // })
        //   .then(response => {
        //     let data = response.data;
        //     if (data.code == '200') {
        //       this.$message({
        //         message: '添加成功!',
        //         type: 'success'
        //       });
        //       this.$router.go(-1);
        //     } else {
        //       this.$message({
        //         message: '添加失败!',
        //         type: 'warning'
        //       });
        //     }
        //   })
      },
    },
  }
</script>

<style scoped>
  .nav{
    background-color: #fff;
    padding: 15px 20px;
  }
  .goBack:hover{
    cursor: pointer;
    color: #2084da;
  }
  .add-user {
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
