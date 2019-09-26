const typeModel = require("../modules/types");
const ERROR_CODE = require("../config/base");
const common = require("../libs/common");

class typeController {
  /**
   * 创建用户
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async create (ctx) {
    //接收客服端
    let req = ctx.request.body;
    if (req.name) {
      try {
        //查询用户是否存在
        const data = await typeModel.getTypeDetail(req.name);
        if (data == null) {
          await typeModel.createType(req);
          ctx.body = common.http_response_fun(200, ERROR_CODE['200'])
        } else {
          ctx.body = common.http_response_fun(3001, ERROR_CODE['3001'])
        }
      } catch (err) {
        ctx.body = common.http_response_fun(5000, ERROR_CODE['5000'], err)
      }
    } else {
      ctx.body = common.http_response_fun(1000, ERROR_CODE['1000'])
    }
  }

  /**
   * 获取用户
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async getTypeAll (ctx) {
    const data = await typeModel.getTypeAll();
    ctx.body = data;
  }
}

module.exports = typeController;