//const UserModel = require("../modules/user");
const ERROR_CODE = require("../config/base");
const common = require("../libs/common");


class articleController {
  /**
   * 添加文章
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async add (ctx) {
    //接收客服端
    let req = ctx.request.body;
    console.log(req);
  }

  /**
   * 查询文章
   * @param ctx
   * @returns {Promise.<void>}
   */

  static async get (ctx) {
    let req = ctx.request.body;
  }
}

module.exports = userController;