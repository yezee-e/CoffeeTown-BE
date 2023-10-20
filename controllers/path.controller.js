// const pathdao = require('../models/path.dao');

// // 카테고리, 상품 리스트

// const path = async (req, res) => {
//   try {
//     const paths = await pathdao.path();
//     res.json(paths);
//   } catch (error) {
//     res.status(400).json({ message: '데이터베이스 오류' });
//   }
// };

// // 상품 리스트

// // const product = async (req, res) => {
// //   try {
// //     const products = await categorydao.product();
// //     res.json(products);
// //   } catch (error) {
// //     res.status(400).json({ message: '데이터베이스 오류' });
// //   }
// // };

// // 합쳐서

// // const listAndproduct = async (req, res) => {
// //   try {
// //     const lists = await categorydao.list(); // 카테고리 리스트
// //     const products = await categorydao.product(); // 상품 리스트
// //     res.json({lists, products});
// //   } catch (error) {
// //     res.status(400).json({ message: '데이터베이스 오류' });
// //   }
// // };

// // module.exports = {
// //   listAndproduct,
// // };

// module.exports = {
//   path,
// };