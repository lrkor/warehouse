const LOCALURL = "http://localhost:3000/";
const URL = {
  getShopingMallInfo: 'index',    //商城首页所有信息
  getGoodsInfo: 'getGoodsInfo',
  registerUser: 'user/register',  //用户注册接口
  login: LOCALURL + 'user/login',  //用户登录接口
  getDetailGoodsInfo: 'goods/getDetailGoodsInfo',  //获取商品详情
  getCateGoryList: 'goods/getCateGoryList',  //得到大类信息
  getCateGorySubList: 'goods/getCategorySubList',  //得到小类信息
  getGoodsListByCategorySubID: 'goods/getGoodsListByCategorySubID',  //得到小类商品信息
};

module.exports = URL;
