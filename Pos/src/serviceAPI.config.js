const LOCALURL = "http://localhost:3000/";
const URL = {
  //用户
  user:{
    login: LOCALURL + 'user/login',  //用户登录接口
    registered: LOCALURL + 'user/registered',  //用户注册接口
    query: LOCALURL + 'user/query',  //用户列表
    delete: LOCALURL + 'user/delete',  //用户删除
    add: LOCALURL + 'user/add',  //用户新增
    get: LOCALURL + 'user/get',  //查询用户信息
    update: LOCALURL + 'user/update',  //更新用户信息
  },

  //商品
  goods:{
    oftenQuery: LOCALURL + 'goods/often/query',  //查询常用商品
    menuQuery: LOCALURL + 'goods/menu/query',  //查询商品菜单内容
    query: LOCALURL + 'goods/query',  //查询商品菜单内容
    delete: LOCALURL + 'goods/delete',  //删除单个商品
    get: LOCALURL + 'goods/get',  //查询单个商品
    add: LOCALURL + 'goods/add',  // 新增商品
    update: LOCALURL + 'goods/update',  // 更新商品
  },

  // 公用
  upload: LOCALURL + 'upload/file',  // 文件上传

};

module.exports = URL;
