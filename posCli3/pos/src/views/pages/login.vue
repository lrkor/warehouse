<template>
    <div id="login" @keyup="entLogin">
        <div class="goSys" @dblclick="goSys"></div>
        <div class="login_main">
            <div>
                <el-input v-model="name" size="large" style="width: 300px;height: 48px" placeholder="请输入账号"></el-input>
            </div>
            <div>
                <el-input v-model="pwd" style="width: 300px;height: 48px" type="password"
                          placeholder="请输入密码"></el-input>
            </div>
            <div>
                <el-button type="success" style="width: 300px;height: 42px" @click="isLogin">登录</el-button>
            </div>
        </div>
    </div>
</template>
<script>
    import url from '@/api/serviceAPI.config.js'
    import {post} from '@/server/request.js'

    export default {
        data() {
            return {
                name: '',
                pwd: '',
                error: ''
            }
        },
        mounted: function () {

        },
        methods: {
            isLogin: function () {
                let name = this.name;
                let pwd = this.pwd;
                if (name === '' || pwd === '') {
                    this.$message({
                        message: '账号或密码不能不空!',
                        type: 'warning'
                    });
                    return;
                }
                let data = {
                    userName: this.name,
                    password: this.pwd,
                    type: 0    //1为后台 0为前台上
                };
                this.login(data).then(res => {
                    if (res.code === '200') {
                        this.$message({
                            message: '登录成功!',
                            type: 'success'
                        });
                        this.$router.push({path: '/store'});
                    } else {
                        this.$message({
                            message: res.message,
                            type: 'warning'
                        });
                    }
                })
            },
            entLogin: function (ev) {
                if (ev.keyCode == 13) {
                    this.isLogin();
                }
            },
            goSys: function () {
                this.$router.push({path: '/sys/login'});
            },

            //登录接口
            async login(data) {
                let res = await post(url.user.login, data);
                return res;
            },
        }
    }
</script>
<style scoped>
    #login {
        height: 100%;
        background-color: #409EFF;
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

    .goSys {
        width: 100px;
        height: 100px;
        position: fixed;
        top: 20px;
        right: 20px;
    }

</style>
