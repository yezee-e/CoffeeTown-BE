// const myDataSource = require('../models/index');

// // 카테고리 + 상품

// const path = () => {
//   return new Promise((res, rej) => {
    
//     myDataSource.query('SELECT * FROM paths', (error, results) => {
//       if (error) {
//         rej(error);
//       } else {
//         res(results);
//       }
//     });
//   });
// };


// // 카테고리 리스트

// // const list = () => {
// //   return new Promise((res, rej) => {
// //     myDataSource.query('SELECT 카테고리 FROM menu', (error, results) => {
// //       if (error) {
// //         rej(error);
// //       } else {
// //         res(results);
// //       }
// //     });
// //   });
// // };

// // 상품 리스트

// // const product = () => {
// //   return new Promise((res, rej) => {
// //     myDataSource.query('SELECT 상품이름, 상품정보, 가격, 개수, 이미지 FROM menu', (error, results) => {
// //       if (error) {
// //         rej(error);
// //       } else {
// //         res(results);
// //       }
// //     });
// //   });
// // };



// module.exports = {
//   path,
// };