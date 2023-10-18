const userService = require('../services/user.service');

//회원가입
const signUp = async (req, res) => {
  try {
    //nickname,email,password,profile_image received from 요청(req)
    const { user_email, user_name, user_password, user_nickname } = req.body;
    //required variables check
    const REQUIRED_KEYS = [user_email, user_name, user_password, user_nickname];

    REQUIRED_KEYS.map((key) => {
      if (!key) {
        throw new Error('필수값이 비어있습니다');
      }
    });

    await userService.signUP(
      user_email,
      user_name,
      user_password,
      user_nickname
    );

    res.status(201).json({ message: 'user_Created' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//로그인
const loginWithEmail = async (req, res) => {
  try {
    const { user_email, user_password } = req.body;
    const REQUIRED_KEYS = [user_email, user_password];

    REQUIRED_KEYS.map((key) => {
      if (!key) {
        throw new Error('필수값이 비어있습니다');
      }
    });

    let user = await userService.logIn(user_email, user_password);
    user = user[0].user_email;

    res.status(200).json({ status: 'success', user, token });
  } catch (error) {
    res.status(400).json({ status: 'login fail', error: error.message });
  }
};

//로그인 된 유저정보
const getUser = async (req, res) => {
  try {
    const { user_email } = req.body;
    let user = await userService.getMyUser(user_email);

    res.status(200).json({
      status: 'success',
      user: user[0].user_email,
      nickname: user[0].user_nickname,
    });
  } catch (err) {
    res.status(400).json({ status: 'getUser fail', error: err.message });
  }
};

module.exports = {
  signUp,
  loginWithEmail,
  getUser,
};
