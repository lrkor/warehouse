const Router = require('koa-router');
let router = new Router();

//字段映射
let keyMap = {
  "order_id": "orderId",
  "is_often": "isOften"
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
  let sqlString = `INSERT INTO orders (id,type, time, money) VALUES ('${id}','${obj.type}','${obj.time}',${obj.money})`;
  for(let i=0;i<goodsData.length;i++){
    let sqlString1 = `INSERT INTO order_goods (order_id, name, number) VALUES ('${id}','${goodsData[i].name}',${goodsData[i].count})`;
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


module.exports = router;
