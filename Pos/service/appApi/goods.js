const Router = require('koa-router');
let router = new Router();

//引入数据库
const {query} = require('../database/init.js');

//常用商品
router.post('/often/query', async (ctx) => {
  let sqlString = `SELECT * FROM goods WHERE is_often=1`;
  let data = await query(sqlString);
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
  let json = {
    code: '200',
    status: 'success',
    data: data,
    message: '查询成功'
  };
  ctx.set("Content-Type", "application/json");
  ctx.body = JSON.stringify(json);
});

module.exports = router;
