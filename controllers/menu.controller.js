const menudao = require('../models/menu.dao');

const menus = async (req, res) => {
  try {
    const menu = await menudao.menus();
    res.json(menu);
  } catch (error) {
    res.status(500).json({ message: '데이터베이스 오류' });
  }
};

module.exports = {
  menus,
}