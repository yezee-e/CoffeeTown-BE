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
        throw new Error('KEY_ERROR');
      }
    });
    const result = await userService.signUP(
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

module.exports = {
  signUp,
};
