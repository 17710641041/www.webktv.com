const fs = require("fs");
const path = require("path");
const router = require('koa-router')()

const typeModel = require("../modules/types");
const articleModel = require("../modules/article");
const typesModel = require("../modules/types");

//首页
router.get('/', async (ctx, next) => {

  let user = ctx.session.user || '';
  let typeData = await typesModel.getTypeAll();
  let listData = await articleModel.getAllArticleDetail(1, 10);
  await ctx.render('index', { title: '前端俱乐部', datas: listData, types: typeData, user: user })

})

//文章详情
router.get('/activity', async (ctx, next) => {
  let user = ctx.session.user || '';
  let id = ctx.request.query.id;
  let mdData = '';
  let listData = await articleModel.getArticleDetail(id);
  let filepath = await path.join('./public/upload/md/', id + '.md');
  await new Promise((resolve, reject) => { // 读image文件夹
    fs.readFile(filepath, "utf8", (err, data) => {
      if (err) { console.log(err); return false; }
      mdData = data;
      resolve()
    });
  });
  await ctx.render('activity', { title: '详情页面', mdData: mdData, datas: listData, user: user })
})

//添加文章
router.get('/write', async (ctx, next) => {
  let user = ctx.session.user || '';
  let typeData = await typesModel.getTypeAll();
  await ctx.render('write', { title: '发布文章', types: typeData, user: user })
})

router.get("/activity/:name", async (ctx) => {
  const data = await typeModel.getTypeDetail(ctx.params.name);
  let listData = await articleModel.getTypeArticleDetail(1, 10, data.id);
  await ctx.render('typelist', { title: ctx.params.name + '前端俱乐部', data: listData })
});

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router;


