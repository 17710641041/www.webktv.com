/**
 * Author:宋国君
 * Time:2019-07-08
 * Describe:文章api
 */

const Router = require('koa-router');
const articleController = require('../controllers/article');

const router = new Router({
  prefix: '/api/v1'
});

//添加文章接口
router.post('/article/add', articleController.add);

//查询列表文章接口
router.get('/article/get', articleController.get);

module.exports = router;