const Router = require('koa-router');
let router = new Router();

//字段映射
let keyMap = {
  "order_id": "orderId"
};

//引入数据库
const {query} = require('../database/init.js');
const {fieldMap} = require('../map/map.js');
const {createId} = require('../tool/randomId.js');


//添加订单
router.post('/add', async (ctx) => {
  let obj = ctx.request.body.data;
  let goodsData = obj.goodsData;
  let id = createId();
  let sqlString = `INSERT INTO orders (id,type, time, total ,money) VALUES ('${id}','${obj.type}','${obj.time}',${obj.total},${obj.money})`;
  for (let i = 0; i < goodsData.length; i++) {
    let sqlString1 = `INSERT INTO order_goods (order_id, name, number,price) VALUES ('${id}','${goodsData[i].name}',${goodsData[i].count},${goodsData[i].price})`;
    let data1 = await query(sqlString1);
  }
  let data = await query(sqlString);
  let json = {
    code: '200',
    status: 'success',
    message: '添加成功'
  };
  ctx.set("Content-Type", "application/json");
  ctx.body = JSON.stringify(json);
});

//查询订单
router.post('/query', async (ctx) => {
  let page = ctx.request.body.page;
  let size = ctx.request.body.size;
  let sqlStringTotal = `SELECT * FROM orders`;
  let dataTotal = await query(sqlStringTotal);

  let sqlString = `SELECT * FROM orders limit ${(page - 1) * size},${size}`;
  let data = await query(sqlString);
  let json = {
    code: '200',
    status: 'success',
    data: data,
    message: '查询成功',
    total:dataTotal.length
  };
  ctx.set("Content-Type", "application/json");
  ctx.body = JSON.stringify(json);
});

//获取订单详情
router.get('/get', async (ctx) => {
  let orderId = ctx.query.orderId;
  let sqlString = `SELECT * FROM order_goods WHERE order_id='${orderId}'`;
  let data = await query(sqlString);
  data = fieldMap(data, keyMap);
  let json = {
    code: '200',
    status: 'success',
    data:data,
    message: '查询成功'
  };
  ctx.set("Content-Type", "application/json");
  ctx.body = JSON.stringify(json);
});


module.exports = router;
