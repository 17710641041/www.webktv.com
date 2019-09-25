

const UserModel = require("../modules/user");
const ERROR_CODE = require("../config/base");
const common = require("../libs/common");
const JwtUtil = require("../libs/jwt");

class userController {
  /**
   * 创建用户
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async create (ctx) {
    //接收客服端
    let req = ctx.request.body;

    if (req.phone && req.password) {
      try {
        //查询用户是否存在
        const data = await UserModel.getUserDetail(req.username);
        if (data == null) {
          //创建用户模型
          await UserModel.createUser(req);
          ctx.body = common.http_response_fun(200, ERROR_CODE['200'])
        } else {
          ctx.body = common.http_response_fun(1004, ERROR_CODE['1004'])
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

  static async login (ctx) {
    let req = ctx.request.body;
    if (req.username && req.password) {
      try {
        // 查询用户详情模型
        let data = await UserModel.getUserDetail(req.username);
        if (data == null) {
          ctx.body = ctx.body = common.http_response_fun(1002, ERROR_CODE['1002'])
        } else if (data.password != req.password) {
          ctx.body = ctx.body = common.http_response_fun(1001, ERROR_CODE['1001'])
        } else {
          let datas = data.dataValues;
          delete datas.password;
          let id = datas.username
          let jwt = new JwtUtil(id);
          let token = jwt.generateToken();
          datas.token = token;
          ctx.body = common.http_response_fun(200, ERROR_CODE['200'], datas)
        }
      } catch (err) {
        console.log(err)
        ctx.body = common.http_response_fun(1003, ERROR_CODE['1003'])
      }
    } else {
      ctx.body = common.http_response_fun(1000, ERROR_CODE['1000'])
    }
  }
}

module.exports = userController;