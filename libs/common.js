const jwt = require('jsonwebtoken');
const config = require('../config/config');

// 返回数据格式
module.exports.http_response_fun = (code, msg, data = {}) => {
  return { "code": code, "msg": msg, "data": data }
}

//创建token
module.exports.createToken = (data) => {
  const token = jwt.sign(
    {
      username: data
    }, config.appSecret,
    { expiresIn: 60 * 60 * 24 * 30 }
  )
  return token;
}

//验证token
/*
module.exports.checkToken = async (ctx, next) => {
  // 请求头中是否设置 token
  const token = ctx.get('token')
  if (token === '') {
    ctx.throw(401, 'token为空')
  }
  //检验 token 是否已过期
  try {
    await jwt.verify(token, config.appSecret)
  } catch (err) {
    ctx.throw(401, '无效token')
  }
  await next()
}*/