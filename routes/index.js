
// 首先引入我们需要用到的模块
const fs = require("fs");
const path = require("path");
const md = require('markdown-it')();

const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', { title: '前端俱乐部' })
})

router.get('/activity', async (ctx, next) => {
  let mdData = '';
  let filepath = await path.join('./public/upload/md/', 'test.md');
  await new Promise((resolve, reject) => { // 读image文件夹
    fs.readFile(filepath, "utf8", (err, data) => {
      if (err) { console.log(err); return false; }
      //mdData = md.render(data);
      mdData = data;
      resolve()
    });
  });
  await ctx.render('activity', { title: '详情页面', mdData: mdData })
})
router.get('/write', async (ctx, next) => {
  await ctx.render('write', { title: '发布文章' })
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
