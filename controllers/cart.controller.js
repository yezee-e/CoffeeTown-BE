const cartService = require('../services/cart.service');

// 장바구니에 상품 추가

const addToCart = async (req, res) => {
  const { product_id, user_email, product_ea } = req.body;

  try {
    await cartService.addToCart(product_id, user_email, product_ea);
    res.status(201).json({ message: '상품이 장바구니에 추가되었습니다.' });
  } catch (error) {
    console.error('데이터베이스 오류: ', error);
    res.status(400).json({ message: '장바구니에 상품을 추가하는데 실패했습니다.' });
  }
};

// 장바구니 조회

const getCartByUser = async (req, res) => {
  const { user_email } = req.params;

  try {
    const cartItems = await cartService.getCartByUser(user_email);

    cartItems.forEach(item => {
      const imageName = item.product_image.split('/').pop();
      const imageURL = `http://localhost:5000/main/images/${imageName}`;
      item.product_image = imageURL;
    })

    res.status(200).json(cartItems);
  } catch (error) {
    console.error('데이터베이스 오류: ', error);
    res.status(400).json({ message: '장바구니를 가져오는데 실패했습니다.' });
  }
};

// 장바구니 수량 업데이트

const updateCartItem = async (req, res) => {
  const { changeAmount, cart_id } = req.body;

  try {
    await cartService.updateCartItem(changeAmount, cart_id);
    res.status(200).json({ message: '장바구니 상품 수량이 업데이트되었습니다.' });
  } catch (error) {
    console.error('데이터베이스 오류: ', error);
    res.status(400).json({ message: '장바구니 상품 수량을 업데이트하는데 실패했습니다.' });
  }
};

// 장바구니 삭제

const deleteCartItem = async (req, res) => {
  const { cart_id } = req.params;

  try {
    await cartService.deleteCartItem(cart_id);
    res.status(200).json({ message: '장바구니 상품이 삭제되었습니다.' });
  } catch (error) {
    console.error('데이터베이스 오류: ', error);
    res.status(400).json({ message: '장바구니 상품을 삭제하는데 실패했습니다.' });
  }
};

module.exports = {
  addToCart,
  getCartByUser,
  updateCartItem,
  deleteCartItem,
};