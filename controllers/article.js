const fs = require('fs');

const articleModel = require("../modules/article");
const ERROR_CODE = require("../config/base");
const common = require("../libs/common");

class articleController {
  /**
   * 添加文章
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async add (ctx) {
    //接收客户端
    let req = ctx.request.body;
    //文件名称
    let fileName = new Date().getTime();
    let user = ctx.session.user || '';
    req.address = fileName;
    req.author = user.username;
    await new Promise((resolve, reject) => { // 读image文件夹
      fs.writeFile('./public/upload/md/' + fileName + '.md', req.cont, function (error) {
        if (error) {
          //console.log('写入失败');
          ctx.body = common.http_response_fun(2001, ERROR_CODE['2001'], error)
        }
        //console.log('写入成功');
        resolve()
      })
    })
    //插入数据库
    await articleModel.createArticle(req);

    ctx.body = common.http_response_fun(200, ERROR_CODE['200'])

  }

  /**
   * 查询文章
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async getList (ctx) {
    let req = ctx.request.body;
    //await articleModel.getAllArticleDetail(1, 10)
  }
}

module.exports = articleController;