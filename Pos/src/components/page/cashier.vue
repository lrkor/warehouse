<template>
  <div>
    <leftNav></leftNav>
    <div class="cashier">
      <el-row>
        <el-col>
          <el-tabs type="border-card">
            <el-tab-pane label="店铺" width="500" align="center">
              <el-table :data="notice">
                <el-table-column align="center" prop="order" label="单号" width="100"></el-table-column>
                <el-table-column align="center" prop="time"  label="时间" width="200"></el-table-column>
                <el-table-column align="center" prop="money" label="金额" width="100"></el-table-column>
                <el-table-column align="center" label="操作" fixed="right">
                  <template slot-scope="scope">
                    <el-button type="text" size="small" @click="checkDetails(scope.row)">查看详情</el-button>
                  </template>
                </el-table-column>
              </el-table>

              <div class="totalDiv">
                <small>总金额：</small>{{totalMoney}}
              </div>

            </el-tab-pane>
            <el-tab-pane label="外卖" width="500">
              <el-table :data="deliveryDetails">
                <el-table-column align="center" prop="order" label="单号" width="100"></el-table-column>
                <el-table-column align="center" prop="time" label="时间" width="200"></el-table-column>
                <el-table-column align="center" prop="money" label="金额" width="100"></el-table-column>
                <el-table-column align="center" label="操作" fixed="right">
                  <template slot-scope="scope">
                    <el-button type="primary" size="small" @click="checkDetails(scope.row)">查看详情</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="totalDiv">
                <small>总金额：</small>{{outTotalMoney}}
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>


      <el-dialog title="单号详情" :visible.sync="dialogTableVisible">
          <el-table type="border-card" :data="gridData">
            <el-table-column property="goodsName" label="名称" width="150"></el-table-column>
            <el-table-column property="count" label="数量" width="200"></el-table-column>
            <el-table-column property="price" label="金额"></el-table-column>
          </el-table>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogTableVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import  leftNav from '@/components/common/leftnav'
    export default {
        name: "cashier",
        components:{
          leftNav
        },
      data(){
          return{
            dialogTableVisible:false,
            totalMoney:0,
            outTotalMoney:0,
            notice:[
              {
                order:1,
                time:'2018/6/24 15:32',
                money:78,
                details:[{goodsName:'汉堡',count:2,price:25},{goodsName:'可乐',count:1,price:7}]
              },
              {
                order:2,
                time:'2018/6/24 15:42',
                money:45,
                details:[{goodsName:'汉堡',count:2,price:25}]
              },
              {
                order:3,
                time:'2018/6/24 15:52',
                money:89,
                details:[{goodsName:'汉堡',count:2,price:25}]
              },
              {
                order:4,
                time:'2018/6/24 16:10',
                money:55,
                details:[{goodsName:'汉堡',count:2,price:25}]
              },
              {
                order:5,
                time:'2018/6/24 16:22',
                money:65,
                details:[{goodsName:'汉堡',count:2,price:25}]
              },
              {
                order:6,
                time:'2018/6/24 16:41',
                money:99,
                details:[{goodsName:'汉堡',count:2,price:25}]
              },
            ],
            deliveryDetails:[
              {
                order:1,
                time:'2018/6/25 15:32',
                money:44,
                details:[{goodsName:'汉堡',count:2,price:25},{goodsName:'可乐',count:1,price:7}]
              },
              {
                order:2,
                time:'2018/6/25 15:42',
                money:36,
                details:[{goodsName:'汉堡',count:2,price:25}]
              },
              {
                order:3,
                time:'2018/6/25 15:52',
                money:96,
                details:[{goodsName:'汉堡',count:2,price:25}]
              },
              {
                order:4,
                time:'2018/6/25 16:10',
                money:78,
                details:[{goodsName:'汉堡',count:2,price:25}]
              },
              {
                order:5,
                time:'2018/6/25 16:22',
                money:66,
                details:[{goodsName:'汉堡',count:2,price:25}]
              }
            ],
            gridData:[]
          }
      },
      mounted:function () {
        document.getElementById('goodsCashier').style.color = '#32ff7b';
        //进行数量和价格的汇总计算
        this.notice.forEach((element) => {
          this.totalMoney=this.totalMoney+element.money;
        });
        this.deliveryDetails.forEach((element) => {
          this.outTotalMoney=this.outTotalMoney+element.money;
        });
      },
      methods:{
        checkDetails(goods){
          this.dialogTableVisible = true;
          this.gridData = goods.details;
        },
      }
    }
</script>

<style scoped>
  .cashier{
    margin-left: 80px;
  }
  .totalDiv{
    background-color: #fff;
    padding: 10px;
    border-bottom: 1px solid #e5e9f2;
  }
</style>
