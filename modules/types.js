

// 引入数据表模型
const types = require("../schema/types");
types.sync({ force: false }); //自动创建表

class typesModel {
  /**
   * 创建分类
   * @param data
   * @returns {Promise<*>}
   */
  static async createType (data) {
    return await types.create({
      name: data.name,      //用户名
    });
  }

  /**
   * 查询分类
   * @param name 字段
   * @returns {Promise<Model>}
   */
  static async getTypeDetail (name) {
    return await types.findOne({
      where: { name }
    });
  }

  static async getTypeAll () {
    return await types.findAll();
  }
}

module.exports = typesModel;