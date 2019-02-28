const Router = require('koa-router');
const fs = require('fs');
const path = require('path');
let router = new Router();

//文件上传
router.post('/file', async (ctx) => {
  const file = ctx.request.files.file; // 上传的文件在ctx.request.files.file
  // 创建可读流
  const reader = fs.createReadStream(file.path);
  // 修改文件的名称
  let myDate = new Date();
  let newFilename = myDate.getTime()+'.'+file.name.split('.')[1];
  let targetPath = path.join(__dirname, '../public/uploads/') + `/${newFilename}`;
  //创建可写流
  const upStream = fs.createWriteStream(targetPath);
  // 可读流通过管道写入可写流
  reader.pipe(upStream);
  let json = {
    code: 200,
    data: { url:'http://' + ctx.headers.host + '/uploads/' + newFilename }
  };
  ctx.set("Content-Type", "application/json");
  ctx.body = JSON.stringify(json);
});

module.exports = router;
