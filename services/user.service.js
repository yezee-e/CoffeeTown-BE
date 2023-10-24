const userDao = require('../models/user.dao');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const signUP = async (user_email, user_name, user_password, user_nickname) => {
  //a. email에 @가 누락되지 않았는지 판단
  if (!user_email.includes('@')) {
    throw new Error('@를 넣어주세요');
  }

  //b. 비밀번호가 5자리를 넘는지 확인
  if (user_password.length < 5) {
    throw new Error('비밀번호는 5자리 이상 입력해주세요!');
  }

  // c.이미 가입된 유저인지 아닌지 판단
  const user = await userDao.findUserByEmail(user_email);

  if (user.length !== 0) {
    throw new Error('이미 존재하는 아이디입니다');
  }

  //d. 비밀번호 암호화
  const salt = bcrypt.genSaltSync(10);
  let hashedPassword = await bcrypt.hash(user_password, salt);
  return await userDao.createUser(
    user_email,
    user_name,
    hashedPassword,
    user_nickname
  );
};

const logIn = async (user_email, user_password) => {
  // 가입된 회원에게 토큰발행
  const user = await userDao.findUserByEmail(user_email);
  if (user) {
    const isMatch = bcrypt.compareSync(user_password, user[0].user_password);

    if (isMatch) {
      token = jwt.sign({ user: 0 }, JWT_SECRET_KEY, { expiresIn: '1d' });
    } else {
      throw new Error('아이디 또는 비밀번호가 일치하지 않습니다');
    }
  }
  return user;
};

const getMyUser = async (user_email) => {
  //로그인된 유저 찾기
  let getLogUser = await userDao.findUserByEmail(user_email);

  if (!getLogUser) {
    throw new Error('can not find user');
  }
  return getLogUser;
};

module.exports = {
  signUP,
  logIn,
  getMyUser,
};
