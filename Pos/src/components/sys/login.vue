<template>
  <div id="login" @keyup="entLogin">
    <div class="login_main">
      <div>
        <el-input v-model="name" size="large" style="width: 300px;height: 48px" placeholder="请输入账号"></el-input>
      </div>
      <div>
        <el-input v-model="pwd" style="width: 300px;height: 48px" type="password" placeholder="请输入密码"></el-input>
      </div>
      <div>
        <el-button type="success" style="width: 300px;height: 42px" @click="isLogin">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import url from '@/serviceAPI.config.js'
  export default {
    data() {
      return {
        name: '',
        pwd: '',
        error: ''
      }
    },
    methods: {
      isLogin: function () {
        if (this.name == '') {
          this.$message({
            message: '账号不能不空!',
            type: 'warning'
          });
        } else if (this.pwd == '') {
          this.$message({
            message: '密码不能为空!',
            type: 'warning'
          });
        } else {
          axios.post(url.user.login, {
            userName: this.name,
            password: this.pwd,
            type:1    //1为后台 0为前台上
          })
            .then(response => {
              let data = response.data;
              if (data.code == '200') {
                this.$message({
                  message: '登录成功!',
                  type: 'success'
                });
                this.$router.push({path: 'sys'});
              } else {
                this.$message({
                  message: data.message,
                  type: 'warning'
                });
              }
            })
            .catch(error => {
              this.$message({
                message: '网络错误!',
                type: 'error'
              });
            });
        }
      },
      entLogin: function (ev) {
        if (ev.keyCode == 13) {
          this.isLogin();
        }
      },
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

  .login_main >div{
    text-align: center;
  }


</style>
