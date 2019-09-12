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
    //接收客服端
    let req = ctx.request.body;
    let fileName = new Date().getTime();
    console.log()
    await new Promise((resolve, reject) => { // 读image文件夹
      fs.writeFile('./public/upload/md/' + fileName + '.md', '大家好，我是写入文件，哈哈', function (error) {
        if (error) {
          console.log('写入失败');
          return false;
        }
        //console.log('写入成功');
        resolve()
      })
    })
    ctx.body = { "code": 200, name: "成功" }
    //数据库写入
    //await articleModel.createArticle(req);
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

module.exports = articleController;