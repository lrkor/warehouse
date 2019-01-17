const Router = require('koa-router');
// const mysql = require('mysql');
let router = new Router();

router.get('/',async(ctx)=>{
  ctx.body="这是用户操作首页"
});

router.get('/login',async(ctx)=>{
  ctx.body="这是用户操作首页";
  console.log(ctx.query);
});

module.exports = router;
