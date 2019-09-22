
const Sequelize = require('sequelize');
const moment = require('moment');
const sequelize = require('../config/db');

const Types = sequelize.define('types',
  {
    //文章id
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true
    },
    //标题
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'name'
    },
    // 创建时间
    createdAt: {
      type: 'TIMESTAMP',
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      get () {
        return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD');
      }
    },
    // 更新时间
    updatedAt: {
      type: 'TIMESTAMP',
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      get () {
        return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD');
      }
    }
  },
  {
    /**
    * 如果为true，则表示名称和model相同，即user
    * 如果为fasle，mysql创建的表名称会是复数，即users
    * 如果指定的表名称本身就是复数，则形式不变
    */
    tableName: 'types',
    timestamps: false,
    freezeTableName: true
  }
);

module.exports = Types;