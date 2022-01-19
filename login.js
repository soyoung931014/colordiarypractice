
i want to login this page

const { user } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports =(req, res) => {
  const accessTokenData = isAuthorized(req)
  // TODO: 로그인 여부를 판단하고, Access token payload를 이용하여 응답을 제공하세요.
// console.log(req.cookies,"========")
console.log(accessTokenData,"😎")

"안녕하세요"
if(!accessTokenData) {
  res.status(401).send({ data: null, message: 'not authorized' });
}else {
  const userInfo = await user.findOne({where: {email: accessTokenData.email }})
  res.status(200).send({ data: {userInfo}, message: 'ok'})
}
}


