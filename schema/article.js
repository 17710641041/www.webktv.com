
const Sequelize = require('sequelize');
const moment = require('moment');

const sequelize = require('../config/db');
const user = require('./user');

const Article = sequelize.define('article',
  {
    //文章id
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true
    },
    //标题
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'title'
    },
    //作者
    author: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'author',
      primaryKey: true
    },
    //阅读
    read: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      field: 'read'
    },
    //文章状态 1:发布,2:未发布,3:禁用
    is_article: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
      field: 'is_article'
    },
    //文章地址
    address: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'address'
    },
    //文章分类
    type: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'type'
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
    tableName: 'article',
    timestamps: false,
    freezeTableName: true
  }
);

Article.belongsTo(user, { foreignKey: 'author', targetKey: 'username', as: 'u' });

module.exports = Article;