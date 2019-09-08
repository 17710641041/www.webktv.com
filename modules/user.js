// 引入mysql的配置文件
const db = require('../config/db');

// 引入sequelize对象
const Sequelize = db.sequelize;

// 引入数据表模型
const user = Sequelize.import('../schema/user');
user.sync({ force: false }); //自动创建表


class UserModel {
  /**
   * 创建用户模型
   * @param data
   * @returns {Promise<*>}
   */
  static async createUser (data) {
    return await user.create({
      username: data.username,      //用户名
      password: data.password,       //密码
      phone: '',
      nickname: '',
      headimgurl: ''
    });
  }

  /**
   * 查询用户
   * @param username 用户
   * @returns {Promise<Model>}
   */
  static async getUserDetail (username) {
    return await user.findOne({
      where: { username }
    });
  }
}

module.exports = UserModel;