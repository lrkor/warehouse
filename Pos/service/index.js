const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');

//引入子路由
let user = require('./appApi/user.js');

//装载所有子路由
let router = new Router();
router.use('/user',user.routes());
// router.get('/login',async(ctx)=>{
//   ctx.body="这是用户登录页"
// });

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
  console.log('[Server] starting at port 3000');
});
