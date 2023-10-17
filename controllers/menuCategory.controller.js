const menuCategorydao = require('../models/menuCategory.dao');

const menuCategory = async (req, res) => {
  try {
    const category = await menuCategorydao.menuCategory();
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: '데이터베이스 오류' });
  }
};

module.exports = {
  menuCategory,
}