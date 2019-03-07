<template>
  <div>
    <el-container style="height: 100%">
      <el-header style="">
        <div class="header_left">
          后台管理
        </div>
        <div class="header_right">
          <div class="phone">
            <img src="../../assets/img/touxiang.jpg" alt="头像">
          </div>
          <div class="personal">
            <el-dropdown size="medium" trigger="click">
            <span class="el-dropdown-link">
              <span class="fff">小心心</span><i class="el-icon-arrow-down el-icon--right"></i>
            </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人资料</el-dropdown-item>
                <el-dropdown-item><span @click="seeGouwu">购物车</span></el-dropdown-item>
                <el-dropdown-item><span @click="ckOut">退出登录</span></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu style="height: 100%"
                   :default-active="$route.path"
                   class="el-menu-vertical-demo"
                   background-color="#393D49"
                   text-color="#fff"
                   active-text-color="#fff"
                   router>
            <el-submenu index="1">
              <template slot="title">
                <i class="iconfont  icon-ren-copy"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item index="/sys/user/list" route="">
                用户列表
                <!--<router-link to="">用户列表</router-link>-->
              </el-menu-item>
            </el-submenu>

            <el-submenu index="2">
              <template slot="title">
                <i class="iconfont  icon-shangpin"></i>
                <span>商品管理</span>
              </template>
              <el-menu-item index="/sys/goods/list" route="">
                商品列表
              </el-menu-item>
              <!--<el-menu-item index="/sys/goods/add" route="">-->
                <!--添加商品-->
              <!--</el-menu-item>-->
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">
                <i class="iconfont  icon-tubiaolunkuo-"></i>
                <span>订单管理</span>
              </template>
              <el-menu-item index="/sys/order/list" route="">
                订单列表
                <!--<router-link to="">订单列表</router-link>-->
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import '../../assets/icon/iconfont.css';

  export default {
    name: "sys",
    data() {
      return {
      }
    },
    methods: {
      goList: function (path) {
        this.$router.push({path: path});
      }
    }
  }
</script>

<style scoped>
  div {
    height: 100%;
  }

  .phone{
    display: flex;
  }

  .phone img{
    width: 30px;
    height: 30px;
  }

  .fff{
    color: #ffffff;
  }

  .el-submenu .el-menu-item {
    min-width: auto !important;
  }
  .el-header {
    background-color: #393D49;
    display: flex;
    justify-content: space-between;
  }

  .el-main {
    background-color: #f4f1f4;
    padding: 0 !important;
  }

  .el-menu-item.is-active {
    background-color: #009688 !important;
  }

  .el-menu-item.is-active a {
    color: #fff !important;
  }

  .header_left{
    background-color: #393D49;
    line-height: 60px;
    font-weight: 700;
    color: #fff;
  }
</style>
