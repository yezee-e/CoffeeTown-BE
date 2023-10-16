const myDataSource = require('./index');

const menuCategory = async (
  menuCategory_id,
  menuCategory_name,
  ref_Category_id
) => {
  // category 테이블 전체 조회
  const category = await myDataSource.query(
    'SELECT * FROM menuCategory;'
  );

  return category;
};

module.exports = {
  menuCategory,
};
