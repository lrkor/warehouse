<template>
  <div class="pos">
    <el-row :gutter="20">
      <el-col :span="8" class="pos-order" id="order-list">
        <el-tabs type="border-card">
          <el-tab-pane label="点餐" width="100">
            <el-table :data="pagingtableData" border height="510">
              <el-table-column prop="name" label="名称" width="120"></el-table-column>
              <el-table-column prop="count" label="数量" width="80"></el-table-column>
              <el-table-column prop="price" label="金额" width="80"></el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button type="danger" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
                  <el-button type="primary" size="small" @click="addOrderList(scope.row)">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="totalDiv">
              <small>数量：</small>
              {{totalCount}} &nbsp;&nbsp;&nbsp;<small>金额：</small>
              {{totalMoney}}
            </div>
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
            <div class="div-btn">
              <el-button type="warning" @click="addCancelled">挂单</el-button>
              <el-button type="danger" @click="delAllGoods">删除</el-button>
              <el-button type="success" @click="checkout">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单" width="100">
            <el-table :data="cancelled" border height="600">
              <el-table-column prop="order" label="单号" width="100"></el-table-column>
              <el-table-column prop="money" label="金额" width="100"></el-table-column>
              <el-table-column label="操作" fixed="right">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="checkDetails(scope.row)">查看</el-button>
                  <el-button type="text" size="small" @click="delCancelled(scope.row)">删除</el-button>
                  <el-button type="text" size="small" @click="checkout1(scope.row)">结账</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="外卖" width="100">
            <el-table :data="takeOut" border height="600">
              <el-table-column prop="order" label="单号" width="100"></el-table-column>
              <el-table-column prop="money" label="金额" width="100"></el-table-column>
              <el-table-column label="操作" fixed="right">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="checkDetailsT(scope.row)">查看</el-button>
                  <el-button type="text" size="small" @click="delCancelledT(scope.row)">删除</el-button>
                  <el-button type="text" size="small" @click="checkout1T(scope.row)">结账</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="16">
        <div class="often-goods">
          <div class="title">常用商品</div>
          <div class="often-goods-list">
            <div class="often-goods-list-item"
                 v-for="(goods,index) in oftenGoods"
                 :key="index"
                 @click="addOrderList(goods)">
              <span class="goods_name">{{goods.name}}</span>
              <span class="o-price">{{goods.price}}</span>
            </div>
          </div>
        </div>
        <div class="goods-type">
          <el-tabs type="border-card">
            <el-tab-pane label="汉堡">
              <div>
                <ul class="cookList">
                  <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.imgUrl"></span>
                    <div style="float: left">
                      <span class="foodName">{{goods.name}}</span>
                      <span class="foodPrice">{{goods.price}}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="小吃">
              <div>
                <ul class="cookList">
                  <li v-for="goods in type1Goods" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.imgUrl"></span>
                    <div style="float: left">
                      <span class="foodName">{{goods.name}}</span>
                      <span class="foodPrice">{{goods.price}}</span>
                    </div>
                  </li>
                </ul>
              </div>

            </el-tab-pane>
            <el-tab-pane label="饮品">

              <div>
                <ul class="cookList">
                  <li v-for="goods in type2Goods" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.imgUrl"></span>
                    <div style="float: left">
                      <span class="foodName">{{goods.name}}</span>
                      <span class="foodPrice">{{goods.price}}</span>
                    </div>
                  </li>
                </ul>
              </div>

            </el-tab-pane>
            <el-tab-pane label="套餐">
              <div>
                <ul class="cookList">
                  <li v-for="goods in type3Goods" @click="addOrderList(goods)">
                    <span class="foodImg"><img :src="goods.imgUrl"></span>
                    <div style="float: left">
                      <span class="foodName">{{goods.name}}</span>
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
        <el-table-column property="name" label="名称" width="150"></el-table-column>
        <el-table-column property="count" label="数量" width="200"></el-table-column>
        <el-table-column property="price" label="金额"></el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
    import url from '@/serviceAPI.config.js'
    import {get, post} from '@/request.js'
    import {getNewTime} from '@/tool/tool.js'

    export default {
        name: 'pos',
        data() {
            return {
                pan: 1,
                dialogTableVisible: false,
                total: 10,
                totalMoney: 0,
                totalCount: 0,
                a: 1,
                tableData: [],
                pagingtableData: [],
                oftenGoods: [],
                type0Goods: [],
                type1Goods: [],
                type2Goods: [],
                type3Goods: [],
                cancelled: [],
                gridData: [],
                takeOut: [
                    {
                        order: 1,
                        money: 20,
                        details: [{name: '汉堡', count: 2, price: 25}]
                    },
                    {
                        order: 2,
                        money: 20,
                        details: [{name: '汉堡', count: 2, price: 25}]
                    },
                    {
                        order: 3,
                        money: 20,
                        details: [{name: '汉堡', count: 2, price: 25}]
                    },
                ]
            }
        },
        created: function () {
            //获取常用商品
            this.getOftenGoods();
            //获取商品菜单内容
            this.getMenuQuery();
        },
        methods: {
            //获取常用商品
            async getOftenGoods(){
                let res = await post(url.goods.oftenQuery);
                this.oftenGoods = res.data;
            },

            //获取商品菜单内容
            async getMenuQuery(){
                for (let i = 0; i < 4; i++) {
                    let res = await post(url.goods.menuQuery, {type: i});
                    if (i == 0) {
                        this.type0Goods = res.data;
                    } else if (i == 1) {
                        this.type1Goods = res.data;
                    } else if (i == 2) {
                        this.type2Goods = res.data;
                    } else if (i == 3) {
                        this.type3Goods = res.data;
                    }
                }
            },

            //数组分页输出
            pagination(pageNo, pageSize, array) {
                let offset = (pageNo - 1) * pageSize;
                return (offset + pageSize >= array.length) ? array.slice(offset, array.length) : array.slice(offset, offset + pageSize);
            },
            sizeChange(val) {
                this.pan = `${val}`;
                this.pagingtableData = this.pagination(this.pan, 8, this.tableData);
            },
            sizePrev() {
                this.pan--;
                this.pagingtableData = this.pagination(this.pan, 8, this.tableData);
            },
            sizeNext() {
                this.pan++;
                this.pagingtableData = this.pagination(this.pan, 8, this.tableData);
            },
            //添加订单列表的方法
            addOrderList(goods) {
                this.totalCount = 0; //汇总数量清0
                this.totalMoney = 0;
                let isHave = false;
                //判断是否这个商品已经存在于订单列表
                for (let i = 0; i < this.tableData.length; i++) {
                    if (this.tableData[i].id == goods.id) {
                        isHave = true; //存在
                    }
                }
                //根据isHave的值判断订单列表中是否已经有此商品
                if (isHave) {
                    //存在就进行数量添加
                    let arr = this.tableData.filter(o => o.id == goods.id);
                    arr[0].count++;
                } else {
                    //不存在就推入数组
                    let newGoods = {id: goods.id, name: goods.name, price: goods.price, count: 1};
                    this.tableData.push(newGoods);
                }

                //将数组进行分页输出
                this.total = Math.ceil(this.tableData.length / 8);
                this.total = this.total * 10;
                this.pagingtableData = this.pagination(1, 8, this.tableData);

                //进行数量和价格的汇总计算
                this.tableData.forEach((element) => {
                    this.totalCount += element.count;
                    this.totalMoney = this.totalMoney + (element.price * element.count);
                });

            },
            //删除单个商品
            delSingleGoods(goods) {
                this.tableData = this.tableData.filter(o => o.id != goods.id);
                this.pagingtableData = this.tableData;
                this.getAllMoney();
            },
            //删除所有商品
            delAllGoods() {
                this.tableData = [];
                this.pagingtableData = this.tableData;
                this.totalCount = 0;
                this.totalMoney = 0;
            },


            //汇总数量和金额
            getAllMoney() {
                this.totalCount = 0;
                this.totalMoney = 0;
                if (this.tableData) {
                    this.tableData.forEach((element) => {
                        this.totalCount += element.count;
                        this.totalMoney = this.totalMoney + (element.price * element.count);
                    });
                }

            },

            //结账
            checkout() {
                if (this.totalCount != 0) {
                    let data = {
                        type:'0',
                        time:getNewTime(),
                        money:this.totalMoney,
                        total:this.totalCount,
                        goodsData:this.pagingtableData
                    };
                    this.addOrder(data).then(res=>{
                        if(res.code==='200'){
                            this.pagingtableData = [];
                            this.tableData = [];
                            this.totalCount = 0;
                            this.totalMoney = 0;
                            this.$message({
                                message: '结账成功，感谢你又为店里出了一份力!',
                                type: 'success'
                            });
                        }
                    });
                } else {
                    this.$message.error('不能空结。老板了解你急切的心情！');
                }
            },

            //新增订单
            async addOrder(data){
                let res = await post(url.order.add,{data});
                return res;
            },

            //添加挂单
            addCancelled() {
                let b = this.a;
                let arr = [];
                let money = this.totalMoney;
                arr = this.tableData;
                if (money == 0) {
                    this.$message.error('不能空挂！');
                    return;
                }
                let json = {
                    order: b,
                    money: money,
                    details: arr
                };
                this.cancelled.push(json);
                b++;
                this.a = b;
                this.tableData = [];
                this.pagingtableData = this.tableData;
                this.totalCount = 0;
                this.totalMoney = 0;
            },

            //查看详情
            checkDetails(goods) {
                // let flag = false;
                this.dialogTableVisible = true;
                this.gridData = goods.details;
            },

            //删除单个挂单
            delCancelled(goods) {
                this.cancelled = this.cancelled.filter(o => o.order != goods.order);
            },
            //挂单结账
            checkout1(goods) {
                this.cancelled = this.cancelled.filter(o => o.order != goods.order);
                this.$message({
                    message: '挂单结账成功，感谢你又为店里出了一份力!',
                    type: 'success'
                });
            },
            //外卖查看详情
            checkDetailsT(goods) {
                // let flag = false;
                this.dialogTableVisible = true;
                this.gridData = goods.details;
            },

            //外卖删除单个挂单
            delCancelledT(goods) {
                this.takeOut = this.takeOut.filter(o => o.order != goods.order);
            },
            //外卖结账
            checkout1T(goods) {
                this.takeOut = this.takeOut.filter(o => o.order != goods.order);
                this.$message({
                    message: '挂单结账成功，感谢你又为店里出了一份力!',
                    type: 'success'
                });
            },

        }
    }
</script>

<style scoped>
  .pos {
    padding: 15px;
  }

  .block {
    text-align: right;
  }

  .div-btn {
    margin-top: 10px;
    text-align: center;
  }

  .title {
    height: 20px;
    border-bottom: 1px solid #d3dce6;
    background-color: #f9fafc;
    padding: 10px;
    text-align: left;
  }

  .often-goods-list {
    display: flex;
    padding: 15px;
    border-left: 1px solid #f1f1f1;
  }

  .often-goods-list-item {
    padding: 10px 20px;
    border: 1px solid #f1f1f1;
    margin-right: 20px;
  }

  .often-goods-list-item:hover {
    cursor: pointer;
  }

  .often-goods-list-item:hover .goods_name {
    color: #58b7ff;
  }

  .o-price {
    color: #58b7ff;
  }

  .goods-type {
    clear: both;
  }

  .cookList li {
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

  .cookList li:hover {
    cursor: pointer;
  }

  .cookList li span {
    display: block;
  }

  .foodImg {
    float: left;
    width: 50%;
    height: auto;
  }

  .foodImg img {
    width: 100px;
    height: 60px;
  }

  .foodName {
    font-size: 16px;
    padding-left: 10px;
    color: brown;
  }

  .foodPrice {
    font-size: 15px;
    padding-left: 10px;
    padding-top: 10px;
  }

  .totalDiv {
    background-color: #fff;
    padding: 10px;
    border-bottom: 1px solid #e5e9f2;
  }

</style>
