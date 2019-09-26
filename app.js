const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa-cors')
const session = require('koa-session');

const index = require('./routes/index')
const upload = require('./api/uploads')
const article = require('./api/article')
const user = require('./api/user')
const types = require('./api/types')

// error handler
onerror(app)

//使用cors
app.use(cors())

app.keys = ['4eb3979f06ed4106af01bd7593b1a072'];
app.use(session({
  key: 'koa:sess',
  maxAge: 7200000, /** 2个小时 */
  overwrite: true,
  httpOnly: true,
  signed: true,
}, app));


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
    if (!ctx.session.user) {
      ctx.response.redirect('/');
    } else {
      await next();
    }
  } else {
    await next();
  }
})

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
