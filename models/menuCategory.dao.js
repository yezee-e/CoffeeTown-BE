const myDataSource = require('../models/index');


const menuCategory = () => {
  return new Promise((resolve, reject) => {
    myDataSource.query('SELECT * FROM menucategory', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  menuCategory,
};

// const menuCategory = async (
//   menuCategory_id,
//   menuCategory_name,
//   ref_Category_id
// ) => {
//   // category 테이블 전체 조회
//   const category = await myDataSource.query(
//     `SELECT * FROM menuCategory;`
//   );

//   return category;
// };

// module.exports = {
//   menuCategory,
// };
