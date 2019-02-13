<template>
  <div>
    <el-container style="height: 100%">
      <el-header style="background-color: #393D49;line-height: 60px;font-weight: 700;color: #fff">后台管理</el-header>
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

  .el-submenu .el-menu-item {
    min-width: auto !important;
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
</style>
