<template>
  <div>
    <leftNav></leftNav>
    <div class="pos">
      <el-row>
        <el-col :span="7" class="pos-order" id="order-list">
          <el-tabs type="border-card">
            <el-tab-pane label="点餐" width="100">
              <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="goodsName" label="名称" width="100"></el-table-column>
                <el-table-column prop="count" label="数量" width="58"></el-table-column>
                <el-table-column prop="price" label="金额" width="58"></el-table-column>
                <el-table-column label="操作" fixed="right">
                  <template slot-scope="scope">
                    <el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
                    <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="totalDiv">
                <small>数量：</small>{{totalCount}} &nbsp;&nbsp;&nbsp;<small>金额：</small>{{totalMoney}}
              </div>
              <div class="div-btn">
                <el-button type="warning" @click="addCancelled">挂单</el-button>
                <el-button type="danger" @click="delAllGoods">删除</el-button>
                <el-button type="success" @click="checkout">结账</el-button>
              </div>
            </el-tab-pane>

            <el-tab-pane label="挂单" width="100">
              <el-table :data="cancelled" border style="width: 100%">
                <el-table-column prop="order" label="单号" width="100"></el-table-column>
                <el-table-column prop="money" label="金额" width="100"></el-table-column>
                <el-table-column label="操作" fixed="right">
                  <template slot-scope="scope">
                    <el-button type="text" size="small"  @click="checkDetails(scope.row)">查看</el-button>
                    <el-button type="text" size="small" @click="delCancelled(scope.row)">删除</el-button>
                    <el-button type="text" size="small" @click="checkout1(scope.row)">结账</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>

            <el-tab-pane label="外卖" width="100">
              <el-table :data="takeOut" border style="width: 100%">
                <el-table-column prop="order" label="单号" width="100"></el-table-column>
                <el-table-column prop="money" label="金额" width="100"></el-table-column>
                <el-table-column label="操作" fixed="right">
                  <template slot-scope="scope">
                    <el-button type="text" size="small"  @click="checkDetailsT(scope.row)">查看</el-button>
                    <el-button type="text" size="small" @click="delCancelledT(scope.row)">删除</el-button>
                    <el-button type="text" size="small" @click="checkout1T(scope.row)">结账</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>


        </el-col>
        <el-col :span="17">
          <div class="often-goods">
            <div class="title">常用商品</div>
            <div class="often-goods-list">
              <ul>
                <li v-for="goods in oftenGoods" @click="addOrderList(goods)">
                  <span>{{goods.goodsName}}</span>
                  <span class="o-price">{{goods.price}}</span>
                </li>
              </ul>
            </div>
          </div>


          <div class="goods-type">
            <el-tabs type="border-card">
              <el-tab-pane label="汉堡">
                <div>
                  <ul class="cookList">
                    <li v-for="goods in tape0Goods" @click="addOrderList(goods)">
                      <span class="foodImg"><img :src="goods.goodsImg"></span>
                      <div style="float: left">
                        <span class="foodName">{{goods.goodsName}}</span>
                        <span class="foodPrice">{{goods.price}}</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="小吃">

                <div>
                  <ul class="cookList">
                    <li v-for="goods in tape1Goods" @click="addOrderList(goods)">
                      <span class="foodImg"><img :src="goods.goodsImg"></span>
                      <div style="float: left">
                        <span class="foodName">{{goods.goodsName}}</span>
                        <span class="foodPrice">{{goods.price}}</span>
                      </div>
                    </li>
                  </ul>
                </div>

              </el-tab-pane>
              <el-tab-pane label="饮品">

                <div>
                  <ul class="cookList">
                    <li v-for="goods in tape2Goods" @click="addOrderList(goods)">
                      <span class="foodImg"><img :src="goods.goodsImg"></span>
                      <div style="float: left">
                        <span class="foodName">{{goods.goodsName}}</span>
                        <span class="foodPrice">{{goods.price}}</span>
                      </div>
                    </li>
                  </ul>
                </div>

              </el-tab-pane>
              <el-tab-pane label="套餐">

                <div>
                  <ul class="cookList">
                    <li v-for="goods in tape3Goods" @click="addOrderList(goods)">
                      <span class="foodImg"><img :src="goods.goodsImg"></span>
                      <div style="float: left">
                        <span class="foodName">{{goods.goodsName}}</span>
                        <span class="foodPrice">{{goods.price}}</span>
                      </div>
                    </li>
                  </ul>
                </div>

              </el-tab-pane>
            </el-tabs>
          </div>
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
  import axios from 'axios';
  import  leftNav from '@/components/common/leftnav'
  export default {
    name: 'pos',
    components:{
      leftNav
    },
    data(){
      return{
        dialogTableVisible: false,
        totalMoney:0,
        totalCount:0,
        a:1,
        tableData:[],
        oftenGoods:[],
        tape0Goods:[],
        tape1Goods:[],
        tape2Goods:[],
        tape3Goods:[],
        cancelled:[],
        gridData: [],
        takeOut:[
          {
            order:1,
            money:20,
            details:[{goodsName:'汉堡',count:2,price:25}]
          },
          {
            order:2,
            money:20,
            details:[{goodsName:'汉堡',count:2,price:25}]
          },
          {
            order:3,
            money:20,
            details:[{goodsName:'汉堡',count:2,price:25}]
          },
        ]
      }
    },
    created:function(){
      axios.get('http://jspang.com/DemoApi/oftenGoods.php')
        .then(reponse=>{
          this.oftenGoods = reponse.data;
        })
        .catch(error=>{
          alert('网络错误')
        });
      axios.get('http://jspang.com/DemoApi/typeGoods.php')
        .then(reponse=>{
          this.tape0Goods = reponse.data[0];
          this.tape1Goods = reponse.data[1];
          this.tape2Goods = reponse.data[2];
          this.tape3Goods = reponse.data[3];
        })
        .catch(error=>{
          alert('网络错误')
        })
    },
    mounted:function () {
      var orderHeight = document.body.clientHeight;
      document.getElementById('order-list').style.height = orderHeight + 'px';
      document.getElementById('goodsPos').style.color = '#32ff7b';
    },
    methods: {
      //添加订单列表的方法
      addOrderList(goods){
        this.totalCount=0; //汇总数量清0
        this.totalMoney=0;
        let isHave=false;
        //判断是否这个商品已经存在于订单列表
        for (let i=0; i<this.tableData.length;i++){
          if(this.tableData[i].goodsId==goods.goodsId){
            isHave=true; //存在
          }
        }
        //根据isHave的值判断订单列表中是否已经有此商品
        if(isHave){
          //存在就进行数量添加
          let arr = this.tableData.filter(o =>o.goodsId == goods.goodsId);
          arr[0].count++;
        }else{
          //不存在就推入数组
          let newGoods={goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1};
          this.tableData.push(newGoods);

        }

        //进行数量和价格的汇总计算
        this.tableData.forEach((element) => {
          this.totalCount+=element.count;
          this.totalMoney=this.totalMoney+(element.price*element.count);
        });

      },
      //删除单个商品
      delSingleGoods(goods){
        this.tableData=this.tableData.filter(o => o.goodsId !=goods.goodsId);
        this.getAllMoney();
      },
      //删除所有商品
      delAllGoods() {
        this.tableData = [];
        this.totalCount = 0;
        this.totalMoney = 0;
      },


      //汇总数量和金额
      getAllMoney(){
        this.totalCount=0;
        this.totalMoney=0;
        if(this.tableData){
          this.tableData.forEach((element) => {
            this.totalCount+=element.count;
            this.totalMoney=this.totalMoney+(element.price*element.count);
          });
        }

      },

      //结账
      checkout() {
        if (this.totalCount!=0) {
          this.tableData = [];
          this.totalCount = 0;
          this.totalMoney = 0;
          this.$message({
            message: '结账成功，感谢你又为店里出了一份力!',
            type: 'success'
          });

        }else{
          this.$message.error('不能空结。老板了解你急切的心情！');
        }

      },

      //添加挂单
      addCancelled(){
        var b = this.a;
        var arr = [];
        var money = this.totalMoney;
        arr = this.tableData;
        if(money==0){
          this.$message.error('不能空挂！');
          return;
        }
        var json = {
          order: b,
          money : money,
          details: arr
        };
        this.cancelled.push(json);
        b++;
        this.a = b;
        this.tableData = [];
        this.totalCount = 0;
        this.totalMoney = 0;
      },

      //查看详情
      checkDetails(goods){
        // var flag = false;
        this.dialogTableVisible = true;
        this.gridData = goods.details;
      },

      //删除单个挂单
      delCancelled(goods){
        this.cancelled=this.cancelled.filter(o => o.order !=goods.order);
      },
      //挂单结账
      checkout1(goods){
        this.cancelled=this.cancelled.filter(o => o.order !=goods.order);
        this.$message({
          message: '挂单结账成功，感谢你又为店里出了一份力!',
          type: 'success'
        });
      },
      //外卖查看详情
      checkDetailsT(goods){
        // var flag = false;
        this.dialogTableVisible = true;
        this.gridData = goods.details;
      },

      //外卖删除单个挂单
      delCancelledT(goods){
        this.takeOut=this.takeOut.filter(o => o.order !=goods.order);
      },
      //外卖结账
      checkout1T(goods){
        this.takeOut=this.takeOut.filter(o => o.order !=goods.order);
        this.$message({
          message: '挂单结账成功，感谢你又为店里出了一份力!',
          type: 'success'
        });
      },

    }
  }
</script>

<style scoped>
 .pos{
   margin-left: 80px;
 }
 .pos-order{
   background-color: #f9fcfc;
   border-right: 1px solid #c0ccda;
 }
  .div-btn{
    margin-top: 10px;
  }
  .title{
    height: 20px;
    border-bottom: 1px solid #d3dce6;
    background-color: #f9fafc;
    padding: 10px;
    text-align: left;
  }
  .often-goods-list ul li{
    list-style: none;
    float: left;
    border: 1px solid #e5e9f2;
    padding: 10px;
    margin: 10px;
    background-color: #ffffff;
  }
 .often-goods-list ul li:hover{
   cursor: pointer;
 }
  .o-price{
    color: #58b7ff;
  }
  .goods-type{
    clear: both;
  }
  .cookList li{
    list-style: none;
    width: 23%;
    border: 1px solid #e5e9f2;
    height: auto;
    overflow: hidden;
    background-color: #ffffff;
    padding: 2px;
    float: left;
    margin: 2px;
  }
 .cookList li:hover{
   cursor: pointer;
 }
 .cookList li span{
   display: block;
 }
  .foodImg{
    float: left;
    width: 50%;
    height: auto;
  }
 .foodImg img{
   width: 100%;
 }
  .foodName{
    font-size: 16px;
    padding-left: 10px;
    color: brown;
  }
  .foodPrice{
    font-size: 15px;
    padding-left: 10px;
    padding-top: 10px;
  }
  .totalDiv{
    background-color: #fff;
    padding: 10px;
    border-bottom: 1px solid #e5e9f2;
  }
  .active{
    color: #000000;
  }
</style>
