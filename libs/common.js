// 返回数据格式
module.exports.http_response_fun = (code, msg, data = {}) => {
  return { "code": code, "msg": msg, "data": data }
}
