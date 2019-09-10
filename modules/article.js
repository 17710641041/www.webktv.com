// 引入mysql的配置文件
const db = require('../config/db');

// 引入sequelize对象
const Sequelize = db.sequelize;

// 引入数据表模型
const article = Sequelize.import('../schema/article');
article.sync({ force: false }); //自动创建表


class articleModel {
  /**
   * 创建文章模型
   * @param data
   * @returns {Promise<*>}
   */
  static async createArticle (data) {
    return await article.create({
      title: data.title,         //文章标题
      author: data.author,       //文章作者
      address: data.address,     //文章路径
      type: data.type            //文章类型
    });
  }

  /**
   * 查询文章模型
   * @param username 用户
   * @returns {Promise<Model>}
   */
  static async getUserDetail (username) {
    return await user.findOne({
      where: { username }
    });
  }
}

module.exports = articleModel;