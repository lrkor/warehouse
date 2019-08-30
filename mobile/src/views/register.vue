<template>
    <div class="login">
        <div class="title">欢迎注册</div>
        <div class="from_body">
            <div class="user_name">
                <input type="text" placeholder="账号" v-model="userName">
            </div>
            <div class="password">
                <input type="password" placeholder="密码" v-model="password">
            </div>
            <div class="btn_father">
                <div class="btn">
                    <van-button color="#56b3f6" type="primary" round size="large" @click="register">立即注册</van-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import url from '@/api/serviceAPI.config.js'
    import {post} from '@/server/request.js'
    export default {
        name: "register",
        data(){
            return{
                userName:'',
                password:''
            }
        },
        methods:{
            register(){
                let userName = this.userName;
                let password = this.password;
                if(userName==='' || password===''){
                    this.$dialog.alert({
                        message: '账号或密码不能为空'
                    });
                }else {
                    this.registered({userName,password}).then(res=>{
                        console.log(res);
                    })
                }
            },

            //注册接口
            async registered(data){
                let res = await post(url.user.registered, data);
                return res;
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
    .footer{
        display: flex;
        margin-top: 10px;
        font-size: 14px;
        text-align: center;
        color: #ffffff;
        justify-content: center;
    }
    .register{
        margin-left: 5px;
    }
</style>