const LOCALURL = "http://localhost:3000/";
const URL = {
  login: LOCALURL + 'user/login',  //用户登录接口
  registered: LOCALURL + 'user/registered',  //用户注册接口
  oftenQuery: LOCALURL + 'goods/often/query',  //查询常用商品
  menuQuery: LOCALURL + 'goods/menu/query',  //查询商品菜单内容
  upload: LOCALURL + 'upload/file',  // 文件上传

  goodsAdd: LOCALURL + 'goods/add',  // 文件上传
};

module.exports = URL;
