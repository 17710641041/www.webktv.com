/**
 * Author:宋国君
 * Time:2019-07-08
 * Describe:文章类型api
 */

const Router = require('koa-router');
const typeController = require('../controllers/types');

const router = new Router({
  prefix: '/api/v1'
});

//创建
router.post('/types/add', typeController.create);

//用户登录接口
router.get('/types/getAll', typeController.getTypeAll);

module.exports = router;