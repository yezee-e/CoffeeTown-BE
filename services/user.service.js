const userDao = require('../models/user.dao');
const bcrypt = require('bcryptjs');

const signUP = async (user_email, user_name, user_password, user_nickname) => {
  //a. email에 @가 누락되지 않았는지 판단
  if (!user_email.includes('@')) {
    throw new Error('@를 넣어주세요');
  }

  //b. 비밀번호가 5자리를 넘는지 확인
  if (user_password.length < 5) {
    throw new Error('비밀번호는 5자리 이상이어야합니다');
  }

  // c.이미 가입된 유저인지 아닌지 판단
  const user = await userDao.findUserByEmail(user_email);
  if (user.length !== 0) {
    throw new Error('user already exist');
  }

  //d. 비밀번호 암호화
  const salt = bcrypt.genSaltSync(10);
  hashedPassword = await bcrypt.hash(user_password, salt);
  return await userDao.createUser(
    user_email,
    user_name,
    hashedPassword,
    user_nickname
  );
};

module.exports = {
  signUP,
};
