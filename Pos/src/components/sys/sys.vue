<template>
  <div>
    <el-container style="height: 100%">
      <el-header style="background-color: #393D49">Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu style="height: 100%"
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#393D49"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <!--<i class="el-icon-location"></i>-->
                <span>用户管理</span>
              </template>
                <el-menu-item index="1-1">
                  <router-link to="/sys/user/list">用户列表</router-link>
                </el-menu-item>
            </el-submenu>

            <el-submenu index="2">
              <template slot="title">
                <!--<i class="el-icon-location"></i>-->
                <span>商品管理</span>
              </template>
              <el-menu-item index="2-1">
                <router-link to="/sys/goods/list">商品列表</router-link>
              </el-menu-item>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">
                <!--<i class="el-icon-location"></i>-->
                <span>订单管理</span>
              </template>
              <el-menu-item index="3-1">
                <router-link to="/sys/order/list">订单列表</router-link>
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
  export default {
    name: "sys",
    data() {
      return {

      }
    },
    methods:{
      goList:function (path) {
        this.$router.push({path: path});
      }
    }
  }
</script>

<style scoped>
  div{
    height: 100%;
  }
  a{
    text-decoration: none;
    color: #fff;
  }
</style>
