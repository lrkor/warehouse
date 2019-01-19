const LOCALURL = "http://localhost:3000/";
const URL = {
  login: LOCALURL + 'user/login',  //用户登录接口
  oftenQuery: LOCALURL + 'goods/often/query',  //查询常用商品
  menuQuery: LOCALURL + 'goods/menu/query',  //查询商品菜单内容
};

module.exports = URL;
