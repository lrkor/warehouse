const Router = require('koa-router');
let router = new Router();

//字段映射
let keyMap = {
  "img_url": "imgUrl",
  "is_often": "isOften"
};

//引入数据库
const {query} = require('../database/init.js');
const {fieldMap} = require('../map/map.js');

//常用商品
router.post('/often/query', async (ctx) => {
  let sqlString = `SELECT * FROM goods WHERE is_often=1`;
  let data = await query(sqlString);
  data = fieldMap(data, keyMap);
  let json = {
    code: '200',
    status: 'success',
    data: data,
    message: '查询成功'
  };
  ctx.set("Content-Type", "application/json");
  ctx.body = JSON.stringify(json);
});

//商品菜单内容
router.post('/menu/query', async (ctx) => {
  let type = ctx.request.body.type;
  let sqlString = `SELECT * FROM goods WHERE type=${type}`;
  let data = await query(sqlString);
  data = fieldMap(data, keyMap);
  let json = {
    code: '200',
    status: 'success',
    data: data,
    message: '查询成功'
  };
  ctx.set("Content-Type", "application/json");
  ctx.body = JSON.stringify(json);
});

//添加商品
router.post('/add', async (ctx) => {
  let obj = ctx.request.body.data;
  let sqlString = `INSERT INTO goods (name, price, img_url, is_often, type) VALUES ('${obj.name}',${obj.price},'${obj.imgUrl}',${obj.isOften},${obj.type})`;
  let data = await query(sqlString);
  let json = {
    code: '200',
    status: 'success',
    message: '添加成功'
  };
  ctx.set("Content-Type", "application/json");
  ctx.body = JSON.stringify(json);
});

//查询所有商品
router.post('/query', async (ctx) => {
  let sqlString = `SELECT * FROM goods`;
  let data = await query(sqlString);
  data = fieldMap(data, keyMap);
  let json = {
    code: '200',
    status: 'success',
    data: data,
    message: '查询成功'
  };
  ctx.set("Content-Type", "application/json");
  ctx.body = JSON.stringify(json);
});

//删除单个商品
router.post('/delete', async (ctx) => {
  let id = ctx.request.body.id;
  let sqlString = `DELETE FROM goods WHERE id='${id}'`;
  let data = await query(sqlString);
  let json = {
    code: '200',
    status: 'success',
    message: '删除成功'
  };
  ctx.set("Content-Type", "application/json");
  ctx.body = JSON.stringify(json);
});

//获取单个商品
router.get('/get', async (ctx) => {
  let id = ctx.query.id;
  let sqlString = `SELECT * FROM goods WHERE id='${id}'`;
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
