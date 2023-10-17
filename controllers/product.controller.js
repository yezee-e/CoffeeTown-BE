const productdao = require('../models/product.dao');

const products = async (req, res) => {
  try {
    const product = await productdao.products();
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: '데이터베이스 오류' });
  }
};

module.exports = {
  products,
}