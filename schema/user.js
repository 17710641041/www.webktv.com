
var Sequelize = require('sequelize');
const sequelize = require('../config/db');

var User = sequelize.define('user',
  {
    //用户id
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true
    },
    //手机号
    phone: {
      type: Sequelize.STRING,
      allowNull: true,
      field: 'phone'
    },
    //用户名
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'username'
    },
    //密码
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'password'
    },
    //用户昵称
    nickname: {
      type: Sequelize.STRING,
      allowNull: true,
      field: 'nickname'
    },
    //用户状态 1:正常,2:禁用
    is_use: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
      field: 'is_use'
    },
    //用户等级 1:普通用户,2:管理员
    level: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
      field: 'level'
    },
    //用户头像
    headimgurl: {
      type: Sequelize.STRING,
      allowNull: true,
      field: 'headimgurl'
    },
    // 创建时间
    createdAt: {
      type: Sequelize.DATE
    },
    // 更新时间
    updatedAt: {
      type: Sequelize.DATE
    }
  },
  {
    /**
    * 如果为true，则表示名称和model相同，即user
    * 如果为fasle，mysql创建的表名称会是复数，即users
    * 如果指定的表名称本身就是复数，则形式不变
    */
    tableName: 'user',
    timestamps: false,
    freezeTableName: true
  }
);


module.exports = User;