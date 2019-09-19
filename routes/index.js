const fs = require("fs");
const path = require("path");
const router = require('koa-router')()

const articleModel = require("../modules/article");
//首页
router.get('/', async (ctx, next) => {
  let listData = await articleModel.getAllArticleDetail(1, 10);
  await ctx.render('index', { title: '前端俱乐部', datas: listData })
})

//文章详情
router.get('/activity', async (ctx, next) => {
  let mdData = '';
  let filepath = await path.join('./public/upload/md/', 'test' + '.md');
  await new Promise((resolve, reject) => { // 读image文件夹
    fs.readFile(filepath, "utf8", (err, data) => {
      if (err) { console.log(err); return false; }
      mdData = data;
      resolve()
    });
  });
  await ctx.render('activity', { title: '详情页面', mdData: mdData })
})

//添加文章
router.get('/write', async (ctx, next) => {
  await ctx.render('write', { title: '发布文章' })
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router;
