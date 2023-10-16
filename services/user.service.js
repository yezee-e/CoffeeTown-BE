const userDao = require('../models/user.dao');

const signUP = async (user_email, user_name, user_password, user_nickname) => {
  //a. email에 @가 누락되지 않았는지 판단
  if (!user_email.includes('@')) {
    throw new Error('@를 넣어주세요');
  }

  //b. 비밀번호가 10자리를 넘는지 확인
  if (user_password.length < 10) {
    throw new Error('비밀번호는 10자리 이상이어야합니다');
  }
  return await userDao.createUser(
    user_email,
    user_name,
    user_password,
    user_nickname
  );
};

module.exports = {
  signUP,
};
