const Koa = require('koa');
const app = new Koa();


const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');



app.use(cors());
app.use(bodyParser());

//引入子路由
let user = require('./appApi/user.js');
let goods = require('./appApi/goods.js');

//装载所有子路由
let router = new Router();
router.use('/user', user.routes());
router.use('/goods', goods.routes());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
  console.log('[Server] starting at port 3000');
});
