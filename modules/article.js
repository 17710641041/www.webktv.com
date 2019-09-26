
// 引入数据表模型
const article = require('../schema/article');
const user = require('../schema/user');
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
   * @param id 文章id
   * @returns {Promise<Model>}
   */
  static async getArticleDetail (address) {
    return await article.findOne({
      where: { address },
      include: [{
        model: user,
        as: 'u',
        attributes: ['nickname']
      }],
    });
  }

  static async getAllArticleDetail (currentPage, count) {
    let offset = (currentPage - 1) * count;
    return await article.findAll({
      //attributes: ['author'],
      order: [['id', 'DESC']],
      include: [{
        model: user,
        as: 'u',
        attributes: ['nickname']
      }],
      limit: parseInt(count),
      offset
    })
    // 
    // return await article.findAndCountAll({
    //   limit: parseInt(count),
    //   offset
    // });

  }
}

module.exports = articleModel;