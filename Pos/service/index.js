const Koa = require('koa');
const app = new Koa();


const Router = require('koa-router');
const koaBody = require('koa-body');
const cors = require('koa2-cors');
const path = require('path');
const koaStatic = require('koa-static');


//设置静态资源的路径
const staticPath = './public';

// 配置静态web服务的中间件
app.use(koaStatic(
  path.join( __dirname, staticPath)
));

app.use(cors());
app.use(koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 200*1024*1024    // 设置上传文件大小最大限制，默认2M
  }
}));

//引入子路由
let user = require('./appApi/user.js');
let goods = require('./appApi/goods.js');
let order = require('./appApi/order.js');
let upload = require('./appApi/upload.js');

//装载所有子路由
let router = new Router();
router.use('/user', user.routes());
router.use('/goods', goods.routes());
router.use('/order', order.routes());
router.use('/upload', upload.routes());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
  console.log('[Server] starting at port 3000');
});
