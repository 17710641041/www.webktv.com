//const moment = require("moment");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('article',
    {
      //文章id
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true,
        autoIncrement: true
      },
      //标题
      title: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'title'
      },
      //作者
      author: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'author'
      },
      //阅读
      read: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'read'
      },
      //文章状态 1:发布,2:未发布,3:禁用
      is_article: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        field: 'is_article'
      },
      //文章地址
      address: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'address'
      },
      //文章分类
      type: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'type'
      },
      // 创建时间
      createdAt: {
        type: DataTypes.DATE
      }
    },
    {
      /**
      * 如果为true，则表示名称和model相同，即user
      * 如果为fasle，mysql创建的表名称会是复数，即users
      * 如果指定的表名称本身就是复数，则形式不变
      */
      freezeTableName: true
    }
  );
}