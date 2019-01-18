const Router = require('koa-router');
let router = new Router();

//引入数据库
const {query} = require('../database/init.js');

router.post('/often/query', async (ctx) => {
  // let user_name = ctx.request.body.userName;
  // let password = ctx.request.body.password;
  let sqlString = 'SELECT * FROM goods';

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
