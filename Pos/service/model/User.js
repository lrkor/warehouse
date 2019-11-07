const db = require('../database/db');
module.exports = db.defineModel('user', {
  username: db.STRING,//用户名
  password: db.STRING,//密码
  userpic: db.STRING,//头像
  usertype: db.INTEGER,//用户类型：0为管理员，1为普通用户
});
