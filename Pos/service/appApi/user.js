const Router = require('koa-router');
// const mysql = require('mysql');
let router = new Router();

//字段映射
let keyMap = {
  "user_name": "userName",
};

//引入数据库
const {query} = require('../database/init.js');
const {fieldMap} = require('../map/map.js');

//登录
router.post('/login', async (ctx) => {
  let userName = ctx.request.body.userName;
  let password = ctx.request.body.password;
  let type = ctx.request.body.type;
  let sqlString = `SELECT * FROM user WHERE user_name='${userName}'`;
  let json = {};
  let data = await query(sqlString);
  data = fieldMap(data, keyMap);
  if (data.length != 0 && data[0].password == password) {
    if(type==1){
      if(data[0].identity==1){
        json = {
          code: '200',
          status: 'success',
          message: '登录成功'
        }
      }else {
        json = {
          code: '403',
          status: 'failure',
          message: '你没有权限'
        }
      }
    }else {
      json = {
        code: '200',
        status: 'success',
        message: '登录成功',
        data:{identity:data[0].identity}
      }
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

// 注册
router.post('/registered', async (ctx) => {
  let userName = ctx.request.body.userName;
  let password = ctx.request.body.password;
  let sqlString = `SELECT * FROM user WHERE user_name='${userName}'`;
  let json = {};
  let data = await query(sqlString);
  if(data.length==0){
    let sqlAdd = `INSERT INTO user (user_name,password) VALUES ('${userName}','${password}')`;
    let data1 = await query(sqlAdd);
    json = {
      code: '200',
      status: 'success',
      message: '注册成功'
    }
  }else {
    json = {
      code: '403',
      status: 'failure',
      message: '用户名已存在'
    }
  }

  ctx.set("Content-Type", "application/json");
  ctx.body = JSON.stringify(json);
});

//查询用户列表
router.post('/query', async (ctx) => {
  let page = ctx.request.body.page;
  let size = ctx.request.body.size;
  let sqlStringTotal = `SELECT * FROM user`;
  let dataTotal = await query(sqlStringTotal);

  let sqlString = `SELECT * FROM user limit ${(page - 1) * size},${size}`;
  let data = await query(sqlString);
  data = fieldMap(data, keyMap);

  let json = {
    code: '200',
    status: 'success',
    data: data,
    message: '查询成功',
    total:dataTotal.length
  };

  ctx.set("Content-Type", "application/json");
  ctx.body = JSON.stringify(json);
});

//查询用户信息
router.get('/get', async (ctx) => {
  let id = ctx.query.id;
  let sqlString = `SELECT * FROM user WHERE id='${id}'`;
  let data = await query(sqlString);
  data = fieldMap(data, keyMap);
  let json = {
    code: '200',
    status: 'success',
    data:data,
    message: '查询成功'
  };
  ctx.set("Content-Type", "application/json");
  ctx.body = JSON.stringify(json);
});

//删除用户
router.post('/delete', async (ctx) => {
  let id = ctx.request.body.id;
  let sqlString = `DELETE FROM user WHERE id='${id}'`;
  let data = await query(sqlString);
  let json = {
    code: '200',
    status: 'success',
    message: '删除成功'
  };
  ctx.set("Content-Type", "application/json");
  ctx.body = JSON.stringify(json);
});

//新增用户
router.post('/add', async (ctx) => {
  let {userName,password,name,identity} = ctx.request.body.data;
  let sqlAdd = `INSERT INTO user (name,user_name,password,identity) VALUES ('${name}','${userName}','${password}','${identity}')`;
  let data = await query(sqlAdd);
  let json = {
    code: '200',
    status: 'success',
    message: '新增成功'
  };
  ctx.set("Content-Type", "application/json");
  ctx.body = JSON.stringify(json);
});

//更新用户信息
router.post('/update', async (ctx) => {
  let obj = ctx.request.body.data;
  let sqlString = `UPDATE user SET name = '${obj.name}', user_name = '${obj.userName}',password = '${obj.password}',identity = '${obj.identity}' WHERE id = '${obj.id}'`;
  let data = await query(sqlString);
  let json = {
    code: '200',
    status: 'success',
    message: '修改成功'
  };
  ctx.set("Content-Type", "application/json");
  ctx.body = JSON.stringify(json);
});


module.exports = router;
