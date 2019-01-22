const Router = require('koa-router');
// const mysql = require('mysql');
let router = new Router();

//引入数据库
const {query} = require('../database/init.js');

router.post('/login', async (ctx) => {
  let userName = ctx.request.body.userName;
  let password = ctx.request.body.password;
  let sqlString =  `SELECT * FROM user WHERE user_name='${userName}'`;
  let json = {};
  let data = await query(sqlString);
  console.log(data);
  if (data.length != 0 && data[0].password == password) {
    json = {
      code: '200',
      status: 'success',
      message: '登录成功'
    }
  } else {
    json = {
      code: '403',
      status: 'failure',
      message: '账号或密码不正确'
    }
  }
  ctx.set("Content-Type", "application/json");
  ctx.body = JSON.stringify(json);
});

module.exports = router;
