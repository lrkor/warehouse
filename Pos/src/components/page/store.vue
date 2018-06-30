<template>
  <div>
    <div class="head">
      <div class="head_left fl">
          <p>一点商家官网</p>
      </div>
      <div class="head_right fr">
        <div class="img fl">
          <img src="../../assets/img/touxiang.jpg" alt="头像">
        </div>
        <div class="maue fl">
          <el-dropdown size="medium" trigger="click">
            <span class="el-dropdown-link">
              <span class="fff">小心心</span><i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人资料</el-dropdown-item>
              <el-dropdown-item><span @click="seeGouwu">购物车</span></el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div class="content overflow">
      <div class="shuffling">
        <h2>本周店长推荐</h2>
          <el-carousel :interval="4000" type="card" height="300px">
            <el-carousel-item v-for="item in urlArr" :key="item.url">
              <!--<h3>{{ item }}</h3>-->
              <img class="img_w" v-lazy="item.url">
            </el-carousel-item>
          </el-carousel>
      </div>
      <div class="goods_menu overflow">
        <div class="goods_menu_left fl">
          <el-tree class="tree"
            :data="menuData"
            :props="defaultProps"
            accordion
            @node-click="handleNodeClick">
          </el-tree>
        </div>
        <div class="goods_menu_right">
              <ul class="cookList">
                <li v-for="goods in foodList">
                  <span class="foodImg"><img :src="goods.foodImg"></span>
                  <div style="float: left">
                    <span class="foodName">{{goods.foodName}}</span>
                    <span class="foodPrice">{{goods.price}}</span>
                    <span class="shopping" @click="addshippingArr(goods)">加入购物车</span>
                  </div>
                </li>
              </ul>
        </div>
        <el-dialog title="购物车" :visible.sync="dialogTableVisible">
          <el-table type="border-card" :data="shippingArr">
            <el-table-column property="foodName" label="名称" width="150"></el-table-column>
            <el-table-column property="count" label="数量" width="200"></el-table-column>
            <el-table-column property="price" label="金额"></el-table-column>
            <el-table-column label="操作" fixed="right">
              <template slot-scope="scope">
                <el-button type="text" size="small"  @click="addshippingArr(scope.row)">增加</el-button>
                <el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogTableVisible = false">取 消</el-button>
            <el-button type="primary" @click="jiezhang">结 账</el-button>
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
        name: "store",
        components:{
      },
        data(){
              return{
                dialogTableVisible: false,
                hanbao:[
                  {
                  foodId:1,
                  foodImg:require('../../assets/img/1.jpg'),
                  foodName:'测试1',
                  price: 18
                }
                ],
                jirou:[
                  {
                    foodId:2,
                    foodImg:require('../../assets/img/2.jpg'),
                    foodName:'测试2',
                    price: 18
                  },
                ],
                cole:[
                  {
                    foodId:3,
                    foodImg:require('../../assets/img/3.jpg'),
                    foodName:'测试3',
                    price: 18
                  },
                ],
                naicha:[
                  {
                    foodId:4,
                    foodImg:require('../../assets/img/4.jpg'),
                    foodName:'测试4',
                    price: 18
                  },
                ],
                xiaochi:[
                  {
                    foodId:5,
                    foodImg:require('../../assets/img/5.jpg'),
                    foodName:'测试5',
                    price: 18
                  },
                ],
                roulei:[
                  {
                    foodId:6,
                    foodImg:require('../../assets/img/6.jpg'),
                    foodName:'测试6',
                    price: 18
                  },
                ],
                foodList:[],
                shippingArr:[],
                urlArr:[
                  {
                    url:require('../../assets/img/1.jpg')
                  },
                  {
                    url:require('../../assets/img/2.jpg')
                  },
                  {
                    url:require('../../assets/img/3.jpg')
                  },
                  {
                    url:require('../../assets/img/4.jpg')
                  },
                  {
                    url:require('../../assets/img/5.jpg')
                  },
                  {
                    url:require('../../assets/img/6.jpg')
                  },
                ],
                menuData: [{
                  label: '主食',
                  children: [
                      {
                      label: '汉堡',
                    },
                    {
                      label: '鸡肉卷',
                    },
                  ]
                }, {
                  label: '饮品',
                  children: [{
                    label: '可乐',
                  }, {
                    label: '奶茶',
                  }]
                }, {
                  label: '特色',
                  children: [{
                    label: '小吃',
                  }, {
                    label: '肉类',
                  }]
                }],
                defaultProps: {
                  children: 'children',
                  label: 'label'
                }
              }
        },
        mounted:function () {
          this.foodList = this.hanbao;
        },
        methods:{
          handleNodeClick(data) {
            if(data.label=='汉堡'){
              this.foodList = this.hanbao;
            }else if(data.label=='鸡肉卷'){
              this.foodList = this.jirou;
            }else if(data.label=='可乐'){
              this.foodList = this.cole;
            }else if(data.label=='奶茶'){
              this.foodList = this.naicha;
            }else if(data.label=='小吃'){
              this.foodList = this.xiaochi;
            }else if(data.label=='肉类'){
              this.foodList = this.roulei;
            }
          },
          addshippingArr(good) {
            let isHave=false;
            //判断是否这个商品已经存在于订单列表
            for (let i=0; i<this.shippingArr.length;i++){
              if(this.shippingArr[i].foodId==good.foodId){
                isHave=true; //存在
              }
            }
            //根据isHave的值判断订单列表中是否已经有此商品
            if(isHave){
              //存在就进行数量添加
              let arr = this.shippingArr.filter(o =>o.foodId == good.foodId);
              arr[0].count++;
            }else{
              //不存在就推入数组
              let newGoods={foodId:good.foodId,foodName:good.foodName,price:good.price,count:1};
              this.shippingArr.push(newGoods);

            }

            //进行数量和价格的汇总计算
            // this.tableData.forEach((element) => {
            //   this.totalCount+=element.count;
            //   this.totalMoney=this.totalMoney+(element.price*element.count);
            // });
          },
          //查看购物车
          seeGouwu(){
            this.dialogTableVisible = true;
          },
          //删除单个商品
          delSingleGoods(goods){
            this.shippingArr=this.shippingArr.filter(o => o.foodId !=goods.foodId);
            // this.getAllMoney();
          },
          //结账
          jiezhang(){
            this.dialogTableVisible = false;
            this.shippingArr = [];
            this.$message({
              message: '结账成功，感谢你又为店里出了一份力!',
              type: 'success'
            });
          }
        },

    }
</script>

<style scoped>

  body{
    background-color: #f7f7f7;
  }
  .head{
    width: 100%;
    height: 60px;
    background-color: #242f42;
    color: #ffffff;
  }
  .fl{
    float: left;
  }
  .fr{
    float: right;
  }
  .overflow{
    overflow: hidden;
  }
  .img{
    width: 30px;
    height: 30px;
  }
  .img img{
    width: 100%;
    border-radius: 50%;
  }
  .maue{
    margin-left: 20px;
    margin-right: 20px;
  }
  .maue:hover{
    cursor: pointer;
  }
  .fff{
    color: #ffffff;
  }
  .head_left p{
    height: 100%;
    line-height: 10px;
    margin-left: 20px;
    font-size: 25px;
  }
  .head_right{
    padding: 15px 30px;
  }
  .content{
    width: 80%;
    margin: 20px auto;
  }
  .shuffling{

  }
  .shuffling h2{
    color: red;
    margin-bottom: 20px;
  }

  /*轮播图*/
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .img_w{
    width: 100%;
    height: 100%;
  }
  .goods_menu_left{
    width: 200px;
    background-color: #99a9bf;
  }
  .goods_menu{
    border: 1px solid #ff0f1d;
    border-radius: 5px;
    padding: 10px;
    height: 300px;
  }
  .goods_menu_right{
    margin-left: 210px;
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
  .tree{
    height: 290px;
  }
  .shopping{
    font-size: 12px;
    margin-left: 10px;
  }
</style>
