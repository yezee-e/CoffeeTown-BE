// const categorydao = require('../models/category.dao');

// // 카테고리, 상품 리스트

// const list = async (req, res) => {
//   try {
//     const lists = await categorydao.list();
//     res.json(lists);
//   } catch (error) {
//     res.status(400).json({ message: '데이터베이스 오류' });
//   }
// };

// const categorydao = require('../models/category.dao');
// const fs = require('fs');

// const list = async (req, res) => {
//   try {
//     const categoriesWithImages = await categorydao.list();

//     // 이미지 파일 경로 목록을 가져오는 함수
//     const imageDirectory = 'C:/CoffeeTown-BE/images';
//     const imageFiles = fs.readdirSync(imageDirectory);

//     // 각 카테고리에 이미지 파일 경로 목록을 추가
//     categoriesWithImages.forEach(category => {
//       category.product.forEach(product => {
//         // 이미지 파일 경로를 서버 URL로 변환
//         product.product_image = `http://localhost:5000/main/images/${product.product_image}`;
//       });
//     });

//     res.json(categoriesWithImages);
//   } catch (error) {
//     console.error('데이터베이스 오류: ', error);
//     res.status(400).json({ message: '데이터베이스 오류' });
//   }
// };

const categorydao = require('../models/category.dao');
const fs = require('fs');

// const list = async (req, res) => {
//   try {
//     const categoriesWithImages = await categorydao.list();

//     // 이미지 파일 경로 목록을 가져오는 함수
//     const imageDirectory = 'C:/CoffeeTown-BE/images';
//     const imageFiles = fs.readdirSync(imageDirectory);

//     // 각 카테고리에 이미지 파일 이름만을 추가
//     categoriesWithImages.forEach(category => {
//       category.product.forEach(product => {
//         // 이미지 파일 이름만 반환 (파일 경로에서 파일 이름만 추출)
//         const imageName = product.product_image.split('/').pop();
//         product.product_image = imageName; // 이미지 파일 이름만 설정
//       });
//     });

//     res.json(categoriesWithImages);
//   } catch (error) {
//     console.error('데이터베이스 오류: ', error);
//     res.status(400).json({ message: '데이터베이스 오류' });
//   }
// };

const list = async (req, res) => {
  try {
    const categoriesWithImages = await categorydao.list();

    // 각 카테고리에 이미지 URL로만 설정
    categoriesWithImages.forEach(category => {
      category.product.forEach(product => {
        // 이미지 파일 이름에서 확장자를 제외한 부분을 추출하고, 이미지 URL로 설정
        const imageName = product.product_image.split('/').pop(); // 이미지 파일 이름
        const imageURL = `http://localhost:5000/main/images/${imageName}`; // 이미지 URL
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


// 상품 리스트

// const product = async (req, res) => {
//   try {
//     const products = await categorydao.product();
//     res.json(products);
//   } catch (error) {
//     res.status(400).json({ message: '데이터베이스 오류' });
//   }
// };

// 합쳐서

// const listAndproduct = async (req, res) => {
//   try {
//     const lists = await categorydao.list(); // 카테고리 리스트
//     const products = await categorydao.product(); // 상품 리스트
//     res.json({lists, products});
//   } catch (error) {
//     res.status(400).json({ message: '데이터베이스 오류' });
//   }
// };

// module.exports = {
//   listAndproduct,
// };

// module.exports = {
//   listAndImage,
// };