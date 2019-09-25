const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa-cors')

const index = require('./routes/index')
const upload = require('./api/uploads')
const article = require('./api/article')
const user = require('./api/user')
const types = require('./api/types')

const JwtUtil = require("./libs/jwt");

// error handler
onerror(app)

//使用cors
app.use(cors())

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))

app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', { extension: 'pug' }))

app.use(async (ctx, next) => {
  if (ctx.url == '/write') {
    let token = ctx.headers.token;
    console.log('token', token)
    let jwt = new JwtUtil(token);
    let result = jwt.verifyToken();
    // 如果考验通过就next，否则就返回登陆信息不正确
    if (result == '0') {
      ctx.response.redirect('/');
    } else {
      await next();
    }
  } else {
    await next();
  }
});

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(index.routes(), index.allowedMethods())
app.use(upload.routes(), upload.allowedMethods())
app.use(article.routes(), article.allowedMethods())
app.use(user.routes(), user.allowedMethods())
app.use(types.routes(), types.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
