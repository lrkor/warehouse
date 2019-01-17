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
        axios.post(url.login,{
          firstName: 'Fred',
          lastName: 'Flintstone'
        })
          .then(reponse=>{
            console.log(reponse)
          })
          .catch(error=>{
            alert('网络错误')
          });

        // if(this.name=='admin' && this.pwd==123){
        //   this.$message({
        //     message: '登录成功!',
        //     type: 'success'
        //   });
        //   this.$router.push({ path: 'Pos' });
        // }else if(this.name=='123' && this.pwd==123){
        //   this.$message({
        //     message: '登录成功!',
        //     type: 'success'
        //   });
        //   this.$router.push({ path: 'store' });
        // }else {
        //   this.$message.error('账号密码不正确');
        // }

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
