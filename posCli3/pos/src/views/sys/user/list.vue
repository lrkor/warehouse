<template>
  <div class="user_list">
    <div class="user_add">
      <el-button type="primary" size="medium" plain @click="goAdd">新增</el-button>
    </div>
    <listTable
      :list="userList"
      :headerList="headerList"
      :del="true"
      :editor="true"
      :detail="false"
      @editor="editor"
      @showDel="showDel"></listTable>
    <div class="paging">
      <div class="block">
        <el-pagination
          layout="prev, pager, next"
          :total="total"
          @current-change="sizeChange"
          @prev-click="sizePrev"
          @next-click="sizeNext"
        >
        </el-pagination>
      </div>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <div style="text-align: center;font-size: 25px">是否确认删除</div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="del">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
    import url from '@/api/serviceAPI.config.js'
    import {post} from '@/server/request.js'
    import listTable from '@/components/listTable'

    export default {
        name: "userList",
        components: {listTable},
        data() {
            return {
                userList: [],
                headerList: [
                    {prop: 'name', label: '姓名', width: '120'},
                    {prop: 'userName', label: '用户名', width: '120'},
                    {prop: 'identity', label: '身份', width: '120'},
                ],
                centerDialogVisible: false,
                page: 1,
                id: '',
                total: 0,
            }
        },
        created() {
            this.query();
        },

        methods: {
            formatIdentity(val) {
                return val === '1' ? '管理员' : '游客'
            },
            async query() {
                let res = await post(url.user.query, {page: this.page, size: 10});
                let userArr = res.data;
                for (let item of userArr) {
                    item.identity = this.formatIdentity(item.identity);
                }
                this.userList = userArr;
                this.total = res.total;
            },

            goAdd() {
                this.$router.push({path: '/sysList/user/add'});
            },

            showDel(row) {
                this.centerDialogVisible = true;
                this.id = row.id;
            },

            async del() {
                let id = this.id;
                this.centerDialogVisible = false;
                let res = await post(url.user.delete, {id});
                if (res.code === '200') {
                    this.$message({
                        message: '删除成功!',
                        type: 'success'
                    });
                    this.query();
                }
            },
            editor(row) {
                let id = row.id;
                this.$router.push({
                    path: `/sysList/user/update/${id}`,
                })
            },

            sizeChange(val) {
                this.page = val;
                this.query();
            },

            sizePrev() {
                this.page = this.page - 1;
                this.query();
            },

            sizeNext() {
                this.page = this.page + 1;
                this.query();
            }
        },
    }
</script>

<style scoped>
  .user_list {
    background-color: #fff;
  }

  .user_add {
    padding-left: 15px;
    padding-top: 15px;
  }

  .paging {
    text-align: right;
    background-color: #ffffff;
    margin-bottom: 20px;
    padding-bottom: 10px;
  }
</style>
