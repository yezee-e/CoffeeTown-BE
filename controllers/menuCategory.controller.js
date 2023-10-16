// const menuCategoryService = require('../services/menuCategory.service');
const menuCategorydao = require('../models/menuCategory.dao');

const menuCategory = async (req, res) => {
  try {
    const category = await menuCategorydao.menuCategory();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: '데이터베이스 오류' });
  }
};

module.exports = {
  menuCategory,
}


// const menuCate = async (req, res) => {
//   try {
//     //nickname,email,password,profile_image received from 요청(req)
//     const { menuCategory_id, menuCategory_name, ref_Category_id } = req.body;
    
//     const result = await menuCategoryService.menuCate(
//       menuCategory_id,
//       menuCategory_name,
//       ref_Category_id
//     );

//     res.status(200).json({ message: 'user_Created' });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// module.exports = {
//   menuCate,
// };
