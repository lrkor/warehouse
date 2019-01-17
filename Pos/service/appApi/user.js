const Router = require('koa-router');
// const mysql = require('mysql');
let router = new Router();

router.get('/',async(ctx)=>{
  ctx.body="这是用户操作首页"
});

router.post('/login',async(ctx)=>{
  ctx.body="111";
  console.log(ctx.request.body);
});

module.exports = router;
