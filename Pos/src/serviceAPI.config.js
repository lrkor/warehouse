const LOCALURL = "http://localhost:3000/";
const URL = {
  //用户
  login: LOCALURL + 'user/login',  //用户登录接口
  registered: LOCALURL + 'user/registered',  //用户注册接口
  userQuery: LOCALURL + 'user/query',  //用户注册接口
  userDelete: LOCALURL + 'user/delete',  //用户注册接口

  //商品
  oftenQuery: LOCALURL + 'goods/often/query',  //查询常用商品
  menuQuery: LOCALURL + 'goods/menu/query',  //查询商品菜单内容
  goodsQuery: LOCALURL + 'goods/query',  //查询商品菜单内容
  goodsDelete: LOCALURL + 'goods/delete',  //删除单个商品
  goodsGet: LOCALURL + 'goods/get',  //查询单个商品


  // 公用
  upload: LOCALURL + 'upload/file',  // 文件上传
  goodsAdd: LOCALURL + 'goods/add',  // 文件上传
};

module.exports = URL;
