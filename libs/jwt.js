const jwt = require('jsonwebtoken');
const cert = "70f4a88c9368338f86b116fe51f0d061"
// 创建 token 类
class Jwt {

  constructor(data) {
    this.data = data;
  }

  //生成token
  generateToken () {
    let data = this.data;
    let token = jwt.sign({
      data,
    }, cert, {
      expiresIn: 60 * 60 * 1  // 1小时过期
    });
    return token;
  }

  // 校验token
  verifyToken () {
    let token = this.data;
    var res;
    jwt.verify(token, cert, function (err, decode) {
      if (err) {  //  时间失效的时候/ 伪造的token     
        console.log("时间失效的时候/ 伪造的token   ")
        res = 0;
      } else {
        console.log("token正确 ")
        res = 1;
      }
    })

    return res;

  }
}

module.exports = Jwt;
