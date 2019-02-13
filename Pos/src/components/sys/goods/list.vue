<template>
  <div class="goods_list">
    <div class="goods_add">
      <el-button type="primary" size="medium" plain @click="goAdd">新增</el-button>
    </div>
    <div class="list_table">
      <el-table
        :data="goodsList"
        border
        style="width: 100%">
        <el-table-column
          prop="name"
          label="名称"
          width="120">
        </el-table-column>
        <el-table-column
          prop="price"
          label="价格"
          width="120">
        </el-table-column>
        <el-table-column
          prop="isOften"
          label="是否常用"
          width="120"
          :formatter="formatIsOften">
        </el-table-column>
        <el-table-column
          prop="type"
          label="商品类别"
          width="120"
          :formatter="formatType">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="danger" @click="showDel(scope.row)" size="mini">删除</el-button>
            <el-button type="primary" @click="editor(scope.row)" size="mini">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
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
  import url from '@/serviceAPI.config.js'
  import axios from 'axios';

  export default {
    data() {
      return {
        goodsList: [],
        centerDialogVisible:false,
        id:'',
      }
    },
    created: function () {
      this.query();
    },
    methods: {
      formatIsOften: function (row, column) {
        return row.isOften === 1 ? '常用' : '不常用'
      },
      formatType: function (row, column) {
        return row.type === 0 ? '汉堡' : row.type === 1 ? '小吃' : row.type === 2 ? '饮品' : '套餐';
      },

      query() {
        axios.post(url.goodsQuery)
          .then(response => {
            this.goodsList = response.data.data;
          })
          .catch(error => {
            this.$message.error('网络错误');
          });
      },

      goAdd() {
        this.$router.push({path: '/sys/goods/add'});
      },
      showDel(row){
        this.centerDialogVisible = true;
        this.id = row.id;
      },
      del() {
        let id = this.id;
        this.centerDialogVisible = false;
        axios.post(url.goodsDelete, {
          id: id,
        })
          .then(response => {
            let data = response.data;
            if (data.code == '200') {
              this.$message({
                message: '删除成功!',
                type: 'success'
              });
              this.query();
            }
          })
          .catch(error => {
            this.$message.error('网络错误');
          });
      },
      editor(row) {
        console.log(row);
      },
    },


  }
</script>

<style scoped>
  .goods_list {
    width: 1100px;
    margin: 20px auto;
    background-color: #fff;
  }

  .list_table {
    padding: 15px;
  }

  .goods_add {
    padding-left: 15px;
    padding-top: 15px;
  }
</style>
