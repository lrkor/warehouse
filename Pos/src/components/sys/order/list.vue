<template>
  <div class="order_list">
    <listTable
      :list="orderList"
      :headerList="headerList"
      :del="false"
      :editor="false"
      :detail="true"
      @showDetail="showDetail"
      ></listTable>
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
    <el-dialog title="订单详情" :visible.sync="centerDialogVisible">
      <el-table type="border-card" :data="orderGoods">
        <el-table-column property="name" label="名称" width="150"></el-table-column>
        <el-table-column property="number" label="数量" width="200"></el-table-column>
        <el-table-column property="price" label="金额"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
    import url from '@/serviceAPI.config.js'
    import {get,post} from '@/request.js'
    import listTable from '../../common/listTable'
    export default {
        name: "orderList",
        components: {listTable},
        data(){
            return{
                orderList: [],
                orderGoods: [],
                headerList: [
                    {prop: 'id', label: '订单编号', width: '250'},
                    {prop: 'type', label: '订单类型', width: '120'},
                    {prop: 'time', label: '下单时间', width: '200'},
                    {prop: 'total', label: '商品总数', width: '120'},
                    {prop: 'money', label: '商品总价（元）', width: '120'},
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
        methods:{
            //获取列表
            async query(){
                let res = await post(url.order.query, {page: this.page, size: 10});
                if(res.code==='200'){
                    this.orderList = res.data;
                    this.total = res.total;
                    this.orderList.filter(item=>{
                        item.type = item.type==='0'?'在店支付':'外卖';
                    })
                }
            },

            //获取详情
            async get(orderId){
                let res = await get(url.order.get, {orderId});
                return res;

            },

            showDetail(row){
                this.get(row.id).then(res=>{
                    if(res.code==='200'){
                        this.orderGoods = res.data;
                        this.centerDialogVisible = true;
                    }
                });
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
        }
    }
</script>

<style scoped>
  .order_list {
    background-color: #fff;
  }

  .paging {
    text-align: right;
    background-color: #ffffff;
    margin-bottom: 20px;
    padding-bottom: 10px;
  }
</style>
