<template>
  <div id="login">
    <div class="login_main">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="userName">
          <el-input v-model="ruleForm.userName" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
    import url from '@/serviceAPI.config.js'
    import {post} from '@/request.js'
    import store from '@/vuex/store';

    export default {
        store,
        data() {
            return {
                ruleForm: {
                    userName: '',
                    password: '',
                },
                rules: {
                    userName: [
                        {required: true, message: '请输入账号', trigger: 'change'},
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'change'}
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let data = {
                            userName: this.ruleForm.userName,
                            password: this.ruleForm.password,
                            type: 1    //1为后台 0为前台上
                        };
                        post(url.user.login, data).then(res => {
                            if (res.code == '200') {
                                this.$message({
                                    message: '登录成功!',
                                    type: 'success'
                                });
                                this.$router.push({path: 'sys'});
                            } else {
                                this.$message({
                                    message: res.message,
                                    type: 'warning'
                                });
                            }
                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
<style scoped>
  #login {
    height: 100%;
    background-color: #909399;
  }

  .login_main {
    width: 500px;
    height: 200px;
    margin: 0 auto;
    padding-top: 200px;
  }

  .login_main > div {
    text-align: center;
  }
  .el-button{
    width: 192px;
  }


</style>
