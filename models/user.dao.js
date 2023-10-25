const myDataSource = require('../models/index');

const findUserByEmail = async (user_email) => {
  const user = await myDataSource.query(
    `SELECT user_email,user_password,user_nickname FROM userInfo WHERE user_email="${user_email}"`
  );
  console.log('daoUser', user);

  return user;
};

const createUser = async (
  user_email,
  user_name,
  hashedPassword,
  user_nickname
) => {
  // users table에 고객 추가 + 비밃번호 암호화
  const joinUser = await myDataSource.query(
    `INSERT INTO userInfo(user_email,user_name,user_password,user_nickname)
            VALUES("${user_email}","${user_name}","${hashedPassword}","${user_nickname}")`
  );

  return joinUser;
};

module.exports = {
  createUser,
  findUserByEmail,
};
