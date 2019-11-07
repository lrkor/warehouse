const Sequelize = require('sequelize');

//数据库连接池
const sequelize = new Sequelize('database', 'root', 'xuwenbin123..!', {
  host: '148.70.186.231',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  timezone: '+08:00'
});

//统一主键id
const ID_TYPE = Sequelize.STRING(50);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
