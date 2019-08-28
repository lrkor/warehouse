<template>
    <div class="login">
        <div class="title">Welcome</div>
        <div class="from_body">
            <div class="user_name">
                <input type="text" placeholder="登录" v-model="userName">
            </div>
            <div class="password">
                <input type="password" placeholder="密码" v-model="password">
            </div>
            <div class="btn_father">
                <div class="btn">
                    <van-button color="#56b3f6" type="primary" round size="large" @click="login">登录/注册</van-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                userName:'',
                password:''
            }
        },
        methods:{
            login(){
                console.log(this.userName);
                console.log(this.password);
                this.$router.push({path: '/index'});
            },
        }
    }
</script>

<style scoped>
    .login{
        height: 100%;
        background: url("../assets/img/login/bgc.png")  no-repeat;
        background-size:cover;
        overflow: hidden;
    }
    .title{
        text-align: center;
        font-size: 60px;
        color: #ffffff;
        margin-top: 5rem;
    }
    .from_body{
        text-align: center;
        margin-top: 2rem;
    }
    .password{
        margin-top: 20px;
    }
    input{
        padding: 10px 0 10px 15px;
        color: #fff;
        background: rgba(255,255,255,0);
        border: 1px solid #eee;
        border-radius: 30px;
        width: 80%;
    }
    .btn{
        margin: 0 auto;
        width: 84%;
        margin-top: 1rem;
    }
    .van-button--large{
        width: 100%;
    }
    input::-webkit-input-placeholder {
        color: #fff;
    }
    input:-moz-placeholder {
        color: #fff;
    }
    input:-ms-input-placeholder {
        color: #fff;
    }
</style>