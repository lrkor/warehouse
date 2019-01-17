const Router = require('koa-router');
// const mysql = require('mysql');
let router = new Router();

router.get('/login', async (ctx) => {
  ctx.body = "这是用户登录页";
  console.log(1111);
});

router.get('/registered', async (ctx) => {
  ctx.body = "这是用户注册页"
});

module.exports = router;
