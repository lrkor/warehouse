<template>
  <div class="goods_list">
    <div class="goods_add">
      <el-button type="primary" size="medium" plain @click="goAdd">新增</el-button>
    </div>
    <listTable
      :list="goodsList"
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
    import url from '@/serviceAPI.config.js'
    import {post} from '@/request.js'

    import listTable from '../../common/listTable'

    export default {
        components: {listTable},
        data() {
            return {
                goodsList: [],
                headerList: [
                    {prop: 'name', label: '名称', width: '120'},
                    {prop: 'price', label: '价格（元）', width: '120'},
                    {prop: 'isOften', label: '是否常用', width: '120'},
                    {prop: 'type', label: '商品类别', width: '120'},
                ],
                centerDialogVisible: false,
                id: '',
                page: 1,
                total: 0,
            }
        },
        created: function () {
            this.query();
        },
        methods: {
            formatIsOften: function (value) {
                return value === '1' ? '常用' : '不常用'
            },
            formatType: function (value) {
                return value === '0' ? '汉堡' : value === '1' ? '小吃' : value === '2' ? '饮品' : '套餐';
            },

            async query() {
                let res = await post(url.goods.query, {page: this.page, size: 10});
                let goodsArr = res.data;
                for (let item of goodsArr) {
                    item.isOften = this.formatIsOften(item.isOften);
                    item.type = this.formatType(item.type);
                }
                this.goodsList = goodsArr;
                this.total = res.total;
            },

            goAdd() {
                this.$router.push({path: '/sys/goods/add'});
            },

            showDel(row) {
                this.centerDialogVisible = true;
                this.id = row.id;
            },
            async del() {
                let id = this.id;
                this.centerDialogVisible = false;
                let res = await post(url.goods.delete, {id});
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
                    path: `/sys/goods/update/${id}`,
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
  .goods_list {
    background-color: #fff;
  }

  .goods_add {
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
