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
const {statistical} = require('../tool/statistical.js');


//添加订单
router.post('/add', async (ctx) => {
  let obj = ctx.request.body.data;
  let goodsData = obj.goodsData;
  let id = createId();
  let sqlString = `INSERT INTO orders (id,type, time, total ,money,date) VALUES ('${id}','${obj.type}','${obj.time}',${obj.total},${obj.money},'${obj.time}')`;
  for (let i = 0; i < goodsData.length; i++) {
    let sqlString1 = `INSERT INTO order_goods (order_id, name, number,price,date) VALUES ('${id}','${goodsData[i].name}',${goodsData[i].count},${goodsData[i].price},'${obj.time}')`;
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

//分类型查询订单
router.get('/query/type', async (ctx) => {
  //在店数据
  const allSql = `SELECT * FROM orders where type = '0'`;
  const daySql = `SELECT * FROM orders where type = '0' and date >= date(now()) and date < DATE_ADD(date(now()),INTERVAL 1 DAY)`;
  const weekSql = `SELECT * FROM orders where type = '0' and DATE_SUB(CURDATE(),INTERVAL 7 DAY)<=date`;
  const monthSql = `SELECT * FROM orders where type = '0' and DATE_SUB(CURDATE(),INTERVAL 30 DAY)<=date`;

  let sqlStringShop;
  let type = ctx.query.type;
  type==='0'?sqlStringShop=allSql:type==='1'?sqlStringShop=daySql:type==='2'?sqlStringShop=weekSql:sqlStringShop=monthSql;
  let shopTotal = await query(sqlStringShop);

  const allSqlTakeOut = `SELECT * FROM orders where type = '1'`;
  const daySqlTakeOut = `SELECT * FROM orders where type = '1' and date >= date(now()) and date < DATE_ADD(date(now()),INTERVAL 1 DAY)`;
  const weekSqlTakeOut = `SELECT * FROM orders where type = '1' and DATE_SUB(CURDATE(),INTERVAL 7 DAY)<=date`;
  const monthSqlTakeOut = `SELECT * FROM orders where type = '1' and DATE_SUB(CURDATE(),INTERVAL 30 DAY)<=date`;

  let sqlStringTakeOut;
  type==='0'?sqlStringTakeOut=allSqlTakeOut:type==='1'?sqlStringTakeOut=daySqlTakeOut:type==='2'?sqlStringTakeOut=weekSqlTakeOut:sqlStringTakeOut=monthSqlTakeOut;
  let takeOutTotal = await query(sqlStringTakeOut);

  let data = [
    {name:'在店',value:shopTotal.length},
    {name:'外卖',value:takeOutTotal.length},
  ];
  let json = {
    code: '200',
    status: 'success',
    data: data,
    message: '查询成功',
  };
  ctx.set("Content-Type", "application/json");
  ctx.body = JSON.stringify(json);
});

//查询分类商品
router.get('/query/good/type', async (ctx) => {
  //在店数据
  let type = ctx.query.type;
  let data = [];
  let typeSql;
  const allSql = '';
  const daySql = `and date >= date(now()) and date < DATE_ADD(date(now()),INTERVAL 1 DAY)`;
  const weekSql = `and DATE_SUB(CURDATE(),INTERVAL 7 DAY)<=date`;
  const monthSql = `and DATE_SUB(CURDATE(),INTERVAL 30 DAY)<=date`;
  type==='0'?typeSql=allSql:type==='1'?typeSql=daySql:type==='2'?typeSql=weekSql:typeSql=monthSql;

  let getGoodSql = `SELECT name FROM goods`;
  let nameArr = await query(getGoodSql);
  if(nameArr.length>0){
    for(item of nameArr){
        let sql = `SELECT number FROM order_goods where name = '${item.name}' ${typeSql}`;
        let orderGoods = await query(sql);
        data.push({name:item.name,value:statistical(orderGoods)});
    }
  }

  let json = {
    code: '200',
    status: 'success',
    data: data,
    message: '查询成功',
  };
  ctx.set("Content-Type", "application/json");
  ctx.body = JSON.stringify(json);
});


module.exports = router;
