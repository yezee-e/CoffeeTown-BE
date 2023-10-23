const myDataSource = require('../models/index');

// 카테고리 + 상품

const list = () => {
  return new Promise((res, rej) => {
    
    myDataSource.query(
      `SELECT mc.menuCategory_id AS category_id, mc.menuCategory_name AS category_name,
      JSON_ARRAYAGG(
      JSON_OBJECT('category_id', mc.menuCategory_id, 'product_id', p.product_id, 'product_name', p.product_name, 'product_price', p.product_price, 'product_ea', p.product_ea, 'product_image', p.product_image)
      ) AS product
      FROM menuCategory mc
      JOIN product p ON mc.menuCategory_id = p.menuCategory_id
      GROUP BY mc.menuCategory_id, mc.menuCategory_name;`,
      (error, results) => {
      if (error) {
        rej(error);
      } else {
        res(results);
      }
    });
  });
};



module.exports = {
  list,
};


// 카테고리 리스트

// const image = () => {
//   return new Promise((res, rej) => {
//     myDataSource.query('SELECT product_image FROM product', (error, results) => {
//       if (error) {
//         rej(error);
//       } else {
//         res(results);
//       }
//     });
//   });
// };

// 상품 리스트

// const product = () => {
//   return new Promise((res, rej) => {
//     myDataSource.query('SELECT 상품이름, 상품정보, 가격, 개수, 이미지 FROM menu', (error, results) => {
//       if (error) {
//         rej(error);
//       } else {
//         res(results);
//       }
//     });
//   });
// };



// module.exports = {
//   list,
//   imageData
// };