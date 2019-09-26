/**
 * Author:宋国君
 * Time:2019-07-08
 * Describe:用户api
 */

const Router = require('koa-router');
const UserController = require('../controllers/user');

const router = new Router({
  prefix: '/api/v1'
});
//
//创建用户接口
router.post('/user/create', UserController.create);

//用户登录接口
router.post('/user/login', UserController.login);

//用户退出
router.get('/user/logout', async (ctx, next) => {
  ctx.session = null;
  ctx.response.redirect('/');
})


module.exports = router;