<template>
  <div id="login" @keyup="entLogin">
    <h1>欢迎使用一点点餐系统</h1>
      <div class="login_main">
        <p>
          <span>账号：</span> <el-input v-model="name" style="width: 200px" placeholder="请输入账号"></el-input>
        </p>
        <p>
          <span>密码：</span> <el-input v-model="pwd" style="width: 200px" type="password" placeholder="请输入密码"></el-input>
        </p>
        <p>
          <!--<router-link to="Pos">-->
            <el-button type="success" round style="width: 255px" @click="isLogin">登录</el-button>
          <!--</router-link>-->
        </p>

      </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import url from '@/serviceAPI.config.js'
  export default {
    data() {
      return {
        name:'',
        pwd:'',
        error:''
      }
    },
    mounted:function(){

    },
    methods:{
      isLogin:function() {
        if(this.name==''){
          this.$message({
            message: '账号不能不空!',
            type: 'warning'
          });
        }else if(this.pwd==''){
          this.$message({
            message: '密码不能为空!',
            type: 'warning'
          });
        } else {
          axios.post(url.login,{
            userName: this.name,
            password: this.pwd
          })
            .then(reponse=>{
              let data = reponse.data;
              if(data.code=='200'){
                this.$message({
                  message: '登录成功!',
                  type: 'success'
                });
                this.$router.push({ path: 'Pos' });
              }else {
                this.$message({
                  message: '账号或密码不正确!',
                  type: 'warning'
                });
              }
            })
            .catch(error=>{
              this.$message({
                message: '网络错误!',
                type: 'error'
              });
            });
        }
      },
      entLogin:function (ev) {
        if(ev.keyCode == 13){
          this.isLogin();
        }
      },
    }
  }
</script>
<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  h1{
    margin-top: 20px;
    color: #6dff79;
  }
#login{
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-image: url("../assets/img/login1.jpg");
  background-repeat: no-repeat;
}
  .login_main{
  width: 500px;
  height: 200px;
  margin: 200px auto;
  }
  .login_main p{
    margin-top: 20px;
  }
  .login_main p span{
    color: #ffffff;
  }
</style>
