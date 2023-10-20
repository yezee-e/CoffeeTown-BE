const myDataSource = require('../models/index');

// 장바구니 상품 추가

const addCart = (cartItem) => {
  return new Promise((res, rej) => {
    myDataSource.query('INSERT INTO cart SET ?', cartItem, (error, result) => { // cart 테이블에 데이터 추가
      if (error) {
        rej(error);
      } else {
        res(result);
      }
    });
  });
};

// 장바구니 조회

const getCart = (user_email) => {
  return new Promise((res, rej) => {
    myDataSource.query(
      'SELECT cart.cart_id, product.product_name, cart.cart_ea, cart.total_price FROM cart INNER JOIN product ON cart.product_id = product.product_id WHERE cart.user_email = ?',
      [user_email],
      (error, results) => {
        if (error) {
          rej(error);
        } else {
          res(results);
        }
      }
    );
  });
};

// 장바구니 수량 업데이트

const updateCart = (cart_id, cart_ea, totalPrice, user_email) => {
  return new Promise((res, rej) => {
    myDataSource.query(
      'UPDATE cart SET cart_ea = ?, total_price = ? WHERE cart_id = ? AND user_email = ?',
      [cart_ea, totalPrice, cart_id, user_email],
      (error, result) => {
        if (error) {
          rej(error);
        } else {
          res(result);
        }
      }
    );
  });
};

// 장바구니 삭제

const deleteCart = (cart_id, user_email) => {
  return new Promise((res, rej) => {
    myDataSource.query('DELETE FROM cart WHERE cart_id = ? AND user_email = ?', [cart_id, user_email], (error, result) => {
      if (error) {
        rej(error);
      } else {
        res(result);
      }
    });
  });
};



module.exports = {
  addCart,
  getCart,
  updateCart,
  deleteCart,
};