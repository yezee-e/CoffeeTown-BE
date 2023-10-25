const categorydao = require('../models/category.dao');

const list = async (req, res) => {
  try {
    const { item } = req.query;

    if (item) {
      const itemsWithImages = await categorydao.search(item);

      itemsWithImages.forEach((category) => {
        category.product.forEach((product) => {
          // 이미지 파일 이름에서 확장자를 제외한 부분을 추출하고, 이미지 URL로 설정
          const imageName = product.product_image.split('/').pop(); // 이미지 파일 이름
          const imageURL = `http://localhost:8000/main/images/${imageName}`; // 이미지 URL
          product.product_image = imageURL; // 이미지 URL로 설정
        });
      });

      return res.status(200).json(itemsWithImages);
    }

    const categoriesWithImages = await categorydao.list();
    // 
    // 각 카테고리에 이미지 URL로만 설정
    categoriesWithImages.forEach((category) => {
      category.product.forEach((product) => {
        // 이미지 파일 이름에서 확장자를 제외한 부분을 추출하고, 이미지 URL로 설정
        const imageName = product.product_image.split('/').pop(); // 이미지 파일 이름
        const imageURL = `http://localhost:8000/main/images/${imageName}`; // 이미지 URL
        product.product_image = imageURL; // 이미지 URL로 설정
      });
    });

    res.json(categoriesWithImages);
  } catch (error) {
    console.error('데이터베이스 오류: ', error);
    res.status(400).json({ message: '데이터베이스 오류' });
  }
};

module.exports = {
  list,
};
