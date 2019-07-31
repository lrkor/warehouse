<template>
  <div class="update">
    <div class="nav"><span class="goBack" @click="goBack">用户管理</span> / 编辑</div>
    <div class="update-user">
      <el-form ref="form" :model="form" label-width="90px">
        <el-form-item label="用户名称：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="登录账号：">
          <el-input v-model="form.userName" ></el-input>
          <el-input style="position: fixed;bottom: -99999px"></el-input>
        </el-form-item>
        <el-form-item label="登录密码：" prop="pass">
          <el-input type="password" style="position: fixed;bottom: -99999px"></el-input>
          <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="身份类型：">
          <el-select v-model="form.identity" placeholder="请选择">
            <el-option label="管理员" value="1"></el-option>
            <el-option label="游客" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确定</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "update"
    }
</script>

<style scoped>
  .update {
    background-color: #fff;
  }

  .nav {
    background-color: #fff;
    padding: 15px 20px;
  }

  .goBack:hover {
    cursor: pointer;
    color: #2084da;
  }

  .update-user {
    padding: 20px 0;
    background-color: #fff;
  }

  .el-form {
    padding: 0 15px;
  }

  .el-input, .el-select {
    width: 300px;
  }
</style>
