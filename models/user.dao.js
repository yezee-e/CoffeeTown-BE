const myDataSource = require('../models/index');

const createUser = async (
  user_email,
  user_name,
  user_password,
  user_nickname
) => {
  // users table에 고객 추가
  const joinUser = await myDataSource.query(
    `INSERT INTO userInfo(user_email,user_name,user_password,user_nickname)
            VALUES("${user_email}","${user_name}","${user_password}","${user_nickname}")`
  );
  console.log('result', joinUser);
  //send data to client as a response

  return joinUser;
};

module.exports = {
  createUser,
};
