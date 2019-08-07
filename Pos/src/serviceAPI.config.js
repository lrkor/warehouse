const local = "http://localhost:3000/";
const productionUrl = "http://148.70.186.231:3000/";  //线网
const url = local;
const URL = {
  //用户
  user:{
    login: url + 'user/login',  //用户登录接口
    registered: url + 'user/registered',  //用户注册接口
    query: url + 'user/query',  //用户列表
    delete: url + 'user/delete',  //用户删除
    add: url + 'user/add',  //用户新增
    get: url + 'user/get',  //查询用户信息
    update: url + 'user/update',  //更新用户信息
  },

  //商品
  goods:{
    oftenQuery: url + 'goods/often/query',  //查询常用商品
    menuQuery: url + 'goods/menu/query',  //查询商品菜单内容
    query: url + 'goods/query',  //查询商品菜单内容
    delete: url + 'goods/delete',  //删除单个商品
    get: url + 'goods/get',  //查询单个商品
    add: url + 'goods/add',  // 新增商品
    update: url + 'goods/update',  // 更新商品
  },

  //订单
  order:{
    add: url + 'order/add',  //新增订单
    query: url + 'order/query',  //查询订单
    get: url + 'order/get',  //查询订单详情
  },

  // 公用
  upload: url + 'upload/file',  // 文件上传

};

module.exports = URL;
