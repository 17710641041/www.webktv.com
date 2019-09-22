const Sequelize = require('sequelize');
const config = {
  //数据库名称
  dbName: "webktv",
  //数据库用户名
  dbUserName: "root",
  //数据库密码
  dbUserPwd: "",
  //数据库地址
  dbAddress: "localhost"
}
//mysql 连接地址
const sequelize = new Sequelize(config.dbName, config.dbUserName, config.dbUserPwd, {
  host: config.dbAddress,
  dialect: 'mysql',
  operatorsAliases: false,
  dialectOptions: {
    //字符集
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    supportBigNumbers: true,
    bigNumberStrings: true
  },
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  },
  timezone: '+08:00'  //东八时区
});

module.exports = sequelize;